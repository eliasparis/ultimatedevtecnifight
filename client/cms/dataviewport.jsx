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
				<span> Date begin : {data.date_begin} </span> ,
				<span> Date end : {data.date_end} </span> 
				<span> /\ _________ Winner -> { data.winner ? data.winner.toUpperCase() : 'Aún no acabó' }</span>			
			</li>
		);
	}
};





