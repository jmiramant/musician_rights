class PagesController < ApplicationController

	def home
		@events = Event.all
		@user = User.new
	end

	def donate
	end

	def about
	end

end