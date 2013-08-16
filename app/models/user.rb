class User < ActiveRecord::Base
  attr_accessible :first_name, :last_name, :count, :email, :zipcode, :band, :opt_out

  validates_presence_of :first_name, :last_name, :email, :zipcode
  validates_format_of :email, :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\Z/i, :on => :create
  # validates_format_of :zipcode, :with => /\w{5}/, :message => "should be in the form 12345"

	def create_user_record_in_mailchimp
		begin
			MailChimp.add_user(self)
		rescue => e
			e.message
		end
	end

end


