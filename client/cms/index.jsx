import React from "react";
import Dataviewport from "../cms/dataviewport.jsx";

export default class CMS extends React.Component {
	render(){
		return (
			<div>
				<h2> CMS </h2>
				<Dataviewport events={ events }></Dataviewport>
			</div>
		);
	}
}