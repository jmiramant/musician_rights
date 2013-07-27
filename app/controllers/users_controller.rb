class UsersController < ApplicationController

	def new
	end

	def create
	end

	def panel
		@new_event = Event.new
		@events = Event.all
	end

end