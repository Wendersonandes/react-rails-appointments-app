class AppointmentsController < ApplicationController

	before_action :set_appointment, :only => [:update]

  def index
		@appointments = Appointment.order('apt_time ASC')
		@appointment = Appointment.new
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

	private

	def set_appointment
		@appointment = Appointment.find(params[:id])
	end

	def appointment_params
		params.require(:appointment).permit(:id, :title, :apt_time)
	end
end
