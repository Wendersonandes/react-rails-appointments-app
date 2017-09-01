class AppointmentsController < ApplicationController

	before_action :set_appointment, :only => [:update, :destroy]

  def index
		@appointments = Appointment.order('apt_time ASC')
		@appointment = Appointment.new
		respond_to do |format|
			format.html
			format.json { render :json => @appointments }
		end
  end

	def create
		@appointment = Appointment.new(appointment_params)
		if @appointment.save
			render :json => @appointment
		else
			render :json => @appointment.errors, :status => :unprocessable_entity
		end
	end

	def update
		if @appointment.update(appointment_params)
			render :json => @appointment
		else
			render :json => @appointment.errors, :status => :unprocessable_entity
		end
	end

	def destroy
		@appointment.destroy
		render :nothing => true, :status => 204
	end

	private

	def set_appointment
		@appointment = Appointment.find(params[:id])
	end

	def appointment_params
		params.require(:appointment).permit(:id, :title, :apt_time)
	end
end
