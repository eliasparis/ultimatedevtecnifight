import React from "react";

export default class Dataviewport extends React.Component {
	render(){
		return(
			<ul>
				{ 
					Object
						.keys(this.props.events)
						.map((line) => 
							<li key={ this.props.events[line].title } >
								{ this.props.events[line].title }
							</li>
						)
				}
			</ul>
		);
	}
};