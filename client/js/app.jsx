import React from "react";
import ReactDOM from "react-dom";
import CMS from "../cms/index.jsx";


//Intial renders
const cms = document.getElementById('cms');
const home = document.getElementById('home');

class Home extends React.Component {
	render(){
		return (
			<h2> La fucking home </h2>
		);
	}
}

if (cms) {
	ReactDOM.render(<CMS/>, cms)
};

if (home) {
	ReactDOM.render(<Home/>, home)
};