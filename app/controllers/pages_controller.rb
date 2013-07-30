class PagesController < ApplicationController

	def home
		@events = Event.all
		@user = User.new
	end

	def donate
	end

	def about
	end

	def members
		@users = User.where(opt_out: 'false')
		@new_user = User.new
		@count = User.all.length
	end

end