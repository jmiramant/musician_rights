class EventsController < ApplicationController
	def create
		Event.create(params[:event])
	end
end