import React from "react";
import request from "superagent";

export default class Eventform extends React.Component {

	constructor(){
		super();
		this.state = {
			title : '',
			date_begin : '',
			date_end : '',
			challenges : [],
		}

		this._onChange = this._onChange.bind(this);
	}

	_onChange(e){
		//Destructuring
		let { target : { name : stateProp } } = e;
		//Generating new state
		let state = {};
		state[stateProp] = e.target.value
		//Setting state
		this.setState(state);
	}

	_onSubmit(e) {
	    e.preventDefault();
	    this._addChallenges();
	}

	_addChallenges(e){
		let challenges = [];
		//Query challenges inputs
		const inputs = document.querySelectorAll('.challengeInput');
		//Pushing data if exists
		inputs.forEach( function(input){
				if (input.value !== "") {
					challenges.push(input.value);
				};
			}
		);
		//Updating state and sending data
		this.setState({ challenges : challenges }, this._send);
	}

	_send(){
		//Update events database to api point
		//Throw ajax
		const data = this.state;
		
		request
			.post('/api/event')
			.send(data)
			.end(( err, res ) => {
				console.log(JSON.parse(res.text));
				console.log(err);
			})
	}

	render(){
		return(
			<form onSubmit={ (e) => this._onSubmit(e) }>
				<input name="title" placeholder="Título" onChange={ this._onChange }></input>
				Begin <input name="date_begin" placeholder="Begin date" type="date" onChange={ this._onChange }></input>
				End <input name="date_end" placeholder="Ending date" type="date" onChange={ this._onChange }></input>

				Challenges:
				{ 
					['x','x','x','x','x'].map( 
						(x, i) => <input key={x+i} name={x+i} className="challengeInput"></input> 
					) 
				}
				<button type="submit">Publica</button>
			</form>
		);
	}
};