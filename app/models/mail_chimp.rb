class MailChimp
  include Hominid

  def self.add_user(user)
    h = Hominid::API.new('91f455bf0d3448173043fd334cbec463-us7')
    h.list_subscribe('61d4987e01', user.email, {'FNAME' => user.first_name, 'LNAME' => user.last_name}, 'html', false, true, true, false)
  end

  def self.unsubscribe_user(user)
    h = Hominid::API.new(MAIL_CHIMP[Rails.env]['api_key'])
    h.list_unsubscribe(MAIL_CHIMP[Rails.env]['subscriber_list'], user.email)
  end

end