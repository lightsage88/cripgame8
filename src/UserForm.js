import React from 'react';

export default class UserForm extends React.Component {
	

	superTrick(e){
		e.preventDefault();
		console.log(this.numberMan);
		console.log(this.numberMan.value);
		this.props.onSubmitFunction(e,this.numberMan.value);
	}

render(){
	return(
		<form onSubmit={(e)=>this.superTrick(e)}>
			<h2>Are you Crip??</h2>
			<label>
			<input ref={input=>this.numberMan = input} type='number' id='number' placeholder='666' />
			</label>
			<button type='submit'>Check Yo Self</button>


		</form>
		);
	}
  }