var AppointmentsList = React.createClass({
	render: function(){
		updateAppointment = this.props.updateAppointment;

		return(
			<div>
				{this.props.appointments.map( function(appointment){
					return(	
						< Appointment appointment = {appointment} key={appointment.id} updateAppointment={updateAppointment}/>
					)
				})}

			</div>
		)
		}
})
