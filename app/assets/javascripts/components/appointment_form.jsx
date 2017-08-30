var AppointmentForm = React.createClass({
	handleChange: function(e){
		var name = e.target.name;
		obj = {};
		obj[name] = e.target.value;
		console.log(obj);
		this.props.onUserInput(obj)
	},

	handleSubmit: function(e){
		e.preventDefault();
		this.props.onFormSubmit();
	},

	setAppTime: function(e){
		var name = 'apt_time';
		var obj = {};
		if(obj[name] = e.toDate()){
			this.props.onUserInput(obj);
		}
	},

	render: function(){
		var inputProps = {
			name: 'apt_time'
		};
		return(
			<div>
				<h3>Make an appointment</h3>
				<form onSubmit={this.handleSubmit} >
					<input name="title" placeholder='Appointment title' value={this.props.title} onChange={this.handleChange} />
					<Datetime input={false} inputProps={inputProps}  value={this.props.apt_time} open={true} onChange={this.setAppTime} />
					<input type="submit" value="Make an appointment" />
				</form>
			</div>
		)
	}
})
