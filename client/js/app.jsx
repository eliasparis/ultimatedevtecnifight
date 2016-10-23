import React from "react";
import ReactDOM from "react-dom";
import CMS from "../cms/index.jsx";
import Home from "../home/index.jsx";


//Intial renders
const cms = document.getElementById('cms');
const home = document.getElementById('home');

if (cms) {
	ReactDOM.render(<CMS/>, cms)
};

if (home) {
	ReactDOM.render(<Home/>, home)
};