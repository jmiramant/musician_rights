class PagesController < ApplicationController

	def home
		events_list = Event.all.sort_by &:date
		@events = events_list.reverse
		@user = User.new
	end

	def donate
	end

	def about
	end

	def members
		@users = User.where(opt_out: 'false').order('created_at DESC')
		@new_user = User.new
		@count = User.all.length
	end

end