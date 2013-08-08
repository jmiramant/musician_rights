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

	def export_csv
		@users = User.all
    user_csv = CSV.generate do |csv|
      csv << ["First Name", "Last Name", "Zipcode", "Band", "Email", "Opt Out"]
      @users.each do |user|
        csv << [user.first_name, user.last_name, user.zipcode, user.band, user.email, user.opt_out]
      end
		end
		send_data(user_csv, :type => 'test/csv', :filename => 'user_list.csv') 
	end
end