import React from "react";
import ReactDOM from "react-dom";

//Importing main site modules asyncronously


//Intial renders
const cms = document.getElementById('cms');
const home = document.getElementById('home');

class CMS extends React.Component {
	render(){
		return (
			<h2> EL CMS </h2>
		);
	}
}

ReactDOM.render(<CMS/>, cms)