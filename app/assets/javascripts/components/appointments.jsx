var Appointments = React.createClass({
	getInitialState: function(){
		return{
			appointments: this.props.appointments,
			title: 'Find the tomorow',
			apt_time: 'Tomorrow at 9pm'

		}
	},

	handleUserInput: function(obj){
		this.setState(obj)
	},

	handleFormSubmit: function(){
		var appointment = { title: this.state.title, apt_time: this.state.apt_time}
		axios.post('/appointments', {appointment: appointment})
		.then(function(response){
			this.addNewAppointment(response.data);
		}.bind(this));
	},

	addNewAppointment: function(appointment){
		var appointments = React.addons.update(this.state.appointments, { $push: [appointment]});
		this.setState({ appointments: _.sortBy(appointments, [function(appointment){return new moment(appointment.apt_time)}])});
	},

	removeAppointment: function(id){
		axios.delete(`/appointments/${id}`)
		.then(function(response){
			var appointments = _.filter(this.state.appointments, function(appointment){
				return appointment.id !== id
			});

			this.setState({ appointments: _.sortBy(appointments, [function(appointment){return new moment(appointment.apt_time)}])});
		}.bind(this));

	},

	render: function(){
		return(
			<div>
				< AppointmentForm title={this.state.title} apt_time={this.state.apt_time} onUserInput={this.handleUserInput}  onFormSubmit={this.handleFormSubmit} />
				< AppointmentsList appointments = {this.state.appointments} updateAppointment = {this.addNewAppointment} onDelete={this.removeAppointment}	/>
			</div>
		)
	}
});
