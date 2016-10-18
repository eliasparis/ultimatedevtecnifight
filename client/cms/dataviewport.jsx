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
		return(
			<li className={	this.props.data.ended ? 'ended' : '' }>
				{ this.props.data.title } , 
			</li>
		);
	}
};





