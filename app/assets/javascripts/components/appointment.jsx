var Appointment = React.createClass({
	getInitialState: function(){
		return{
			edit: false,
			id: this.props.appointment.id,
			title: this.props.appointment.title,
			apt_time: this.props.appointment.apt_time
		}
	},

	handleChange: function(e){
		var name = e.target.name;
		var obj = {};
		obj[name] = e.target.value;
		this.onUserInput(obj)
	},

	setAppTime: function(e){
		var name = 'apt_time';
		var obj = {};
		if(obj[name] = e.toDate()){
			this.onUserInput(obj)
		}
	},

	onUserInput: function(obj){
		this.setState(obj);
	},

	handleEdit: function(){
		this.setState({ edit: !this.state.edit});
	},

	handleSubmit: function(e){
		e.preventDefault();
		var appointment = {title: this.state.title, apt_time: this.state.apt_time}
		axios.patch(`/appointments/${this.state.id}`,{appointment: appointment})
		.then(function(response){
			this.props.updateAppointment(response.data)
			this.handleEdit()
		}.bind(this));
	},

	handleRemove: function(){
		this.props.onDelete(this.state.id)
	},

	render_edit: function(){
		var inputProps = {
			name: 'apt_time'
		};
		return(
			<div>
				<form onSubmit={this.handleSubmit}>
					<input name='title' defaultValue={this.state.title} type="text" onChange={this.handleChange} />
					<Datetime inputProps={inputProps}  defaultValue={this.state.apt_time} onChange={this.setAppTime} />
					<button onClick={this.handleEdit}>Cancel</button>
					<input type="submit" value="Update appointment" />
				</form>
			</div>
		);
	},

	render_appointment: function(){
		return(
			<div>
				<h3>{this.state.title}</h3>
				<p>{formatDate(this.state.apt_time)}</p>
				<button onClick={this.handleEdit}>Edit</button>
				<button onClick={this.handleRemove}>Remove</button>
			</div>
		);
	},

	render: function(){
		var isEditing = this.state.edit;

		if(isEditing){
			return this.render_edit();
		}else{
			return this.render_appointment();
		}
	}
});
