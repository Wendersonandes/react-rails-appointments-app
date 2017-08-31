var formatDate = function(d){
	return	moment(d).format('MMMM DD YYYY, h:mm:ss a');
}

function setAxiosHeaders(){
	var token = document.getElementsByName('csrf-token');
	axios.defaults.headers.common['X-CSRF-Token'] = token[0].getAttribute('content');
	axios.defaults.headers.common['Accept'] = 'application/json';
};

setAxiosHeaders();
