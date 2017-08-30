class AppointmentsController < ApplicationController
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

	private

	def appointment_params
		params.require(:appointment).permit(:id, :title, :apt_time)
	end
end
