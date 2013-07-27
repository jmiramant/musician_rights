class ApplicationController < ActionController::Base
  protect_from_forgery
  helper_method :admin?

  private

  def admin?
  	session[:password] == 'Lovelife123'
	end

end
