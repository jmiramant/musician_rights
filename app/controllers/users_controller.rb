class UsersController < ApplicationController

	def new
		@user = User.new
	end

	def create
	end

	def panel
		@new_event = Event.new
		@events = Event.all
	end

end