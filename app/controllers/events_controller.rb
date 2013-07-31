class EventsController < ApplicationController
	def create
		Event.create(params[:event])
	end	
	
	def destroy
	    @event = Event.find(params[:id])
	    @event.destroy
	    respond_to do |format|
	      format.html { redirect_to users_panel_path }
	    end
	  end
end