var AppointmentsList = React.createClass({
	render: function(){
		updateAppointment = this.props.updateAppointment;
		onDelete = this.props.onDelete;

		return(
			<div>
				{this.props.appointments.map( function(appointment){
					return(	
						< Appointment appointment = {appointment} key={appointment.id} updateAppointment={updateAppointment} onDelete={onDelete} />
					)
				})}
			</div>
		)
	}
})
