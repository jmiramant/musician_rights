class User < ActiveRecord::Base
  attr_accessible :first_name, :last_name, :email, :zipcode, :band, :opt_out

  validates_presence_of :first_name, :last_name, :email, :zipcode
  validates_format_of :email, :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\Z/i, :on => :create
  validates_format_of :zipcode, :with => /^\d{5}(-\d{4})?$/, :message => "should be in the form 12345"

  after_create :create_user_record_in_mailchimp

	def create_user_record_in_mailchimp
		MailChimp.add_user(self)
	end

end


