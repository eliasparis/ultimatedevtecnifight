import React from "react";

export default class Dataviewport extends React.Component {
	render(){
		return(
			<ul>
				{ 
					Object
						.keys(this.props.events)
						.map((line) => 
							<Eventdata 
								key={ this.props.events[line].title } 
								data={ this.props.events[line] } >
							</Eventdata>
						)
				}
			</ul>
		);
	}
};

class Eventdata extends React.Component {

	render(){
		
		const data = this.props.data;

		return(
			<li className={	data.ended ? 'ended' : '' }>
				{ data.title } ---
				<span> Date begin : X </span> ,
				<span> Date end : Y </span> ,				
			</li>
		);
	}
};





