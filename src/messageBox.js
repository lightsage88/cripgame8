import React from 'react';

export default class MessageBox extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			backa: ''
		}
	}
	

	goblox(event) {
		console.log('goblox');
		console.log(event);
	}
	
	
render(){


	return (
		<div>
			<h2>{this.props.message}</h2>
			<span>Number of attempts: {this.props.attemptCount}</span>
			
			<h3>Previous answers</h3>
			<ul onChange={(event)=>this.goblox(event)}>
			{this.props.shit}
			</ul>
		</div>
		);
	}
}


