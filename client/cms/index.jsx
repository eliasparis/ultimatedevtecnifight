import React from "react";
import Dataviewport from "../cms/dataviewport.jsx";
import Eventform from "../cms/eventform.jsx";

export default class CMS extends React.Component {
	render(){
		return (
			<div>
				<h2> CMS </h2>
				<Eventform></Eventform>
				<Dataviewport events={ events }></Dataviewport>
			</div>
		);
	}
}