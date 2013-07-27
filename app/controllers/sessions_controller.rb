class SessionsController < ApplicationController
	def new
	end

	def create
	  session[:password] = params[:password]
	  flash[:notice] = "Successfully logged in"
	  redirect_to users_panel_path
	end

	def destroy
	  reset_session
	  flash[:notice] = "Successfully logged out"
	  redirect_to home_path
	end
end