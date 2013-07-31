class UsersController < ApplicationController

	def new
		@user = User.new
	end

	def create
		p params[:user]
		@user = User.create(params[:user])
	  respond_to do |format|
	    if @user.save
	      format.json { render json: @user }
	    else
	      format.json { render json: @user.errors.full_messages, status: :unprocessable_entity }
	    end
	  end
	end

	def panel
		@new_event = Event.new
		@events = Event.all
	end

end