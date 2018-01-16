import React from 'react';
import logo from './gangSkull.jpg';
import './App.css';
import UserForm from './UserForm';
import MessageBox from './messageBox';


export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      numberToSeek : Math.round(Math.random()*100),
      attemptAmount:0,
      yourInput: '',
      attemptLogs: [],
      message : ''
    }
    this.uponRightGuess = this.uponRightGuess.bind(this);
  }

  uponRightGuess(e,input){
    console.log('uponRightGuess running');

    // this.state.attemptLogs.forEach(function(bit){
    //   console.log(bit);
    //   if(input === bit){
    //     console.log('you already tried that');
        
    //     this.setState({
    //       message:'You already tried that'
    //     });
        
    //   }
    // })
        console.log(this.state.attemptLogs);
        (this.state.attemptLogs).push(input);
        console.log(input);
        console.log(this.state.attemptLogs);
        this.setState({
            yourInput : input,
            attemptAmount: this.state.attemptAmount+1,
            attemptLogs: this.state.attemptLogs
            
        });
        console.log(this.state.attemptLogs);
        this.findGang(input);
  }
      
   




    findGang(input){

    let goal = this.state.numberToSeek;
    let array = this.state.attemptLogs;
    console.log(array.length);
    console.log(input);
    console.log(array[array.length-1]);
    if(input === goal.toString()){
      console.log('get ready to get jumped in');
      this.setState({
        message: 'Get ready to get JUMPED IN, CUH!'
      });
      window.location.assign("https://www.youtube.com/watch?v=H0iSh9A7rLI")
    } else if((input <= goal-30) || (input >= goal + 30)) {
      console.log('you a god damned blood');
      this.setState({
        message: 'you a god damned blood'
      });
    } else if((input <= goal-20) || (input>=goal + 20)) {
      console.log('you look slightly blood to me');
      this.setState({
        message: 'you look slightly blood to me'
      });
    } else if ((input<=goal-10) || (input>=goal+10)){
      console.log('anyone bound for Bloodness would never get this close');
      this.setState({
        message: 'anyone bound for Bloodness would never get this close'
      });
    } else if((input <= goal -5) || (input >= goal + 5)) {
      console.log('you almost cripish enough to get jumped in!');
      this.setState({
        message: 'you almost cripish enough to get jumped in!'
      });
    } else if((input <=goal-3) || (input >= goal +3)) {
      console.log("You're so close I can almost see the blue bandanna on you now!");
      this.setState({
        message: "You're so close I can almost see the blue bandanna on you now!"
      });
    } else if((input <=goal-1) || (input>=goal+1)) {
      console.log('practically a crip now');
      this.setState({
        message: 'practically a crip now'
      });
    } 
  }
  

  lookyLoo(e){
    console.log('lookyLoo running');
    console.log(e);
  }



  render() { 

    const numbers = this.state.attemptLogs.map((number, index) => 
       <li key={index}>{number}</li>
      );




    console.log(this.state.numberToSeek);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">'What Set Do You Claim?'</h1>
        </header>
        <UserForm onSubmitFunction={(e, input)=>this.uponRightGuess(e, input)} />
        <MessageBox shit={numbers} onChange={(e)=>this.lookyLoo(e)} stuff={this.state.attemptLogs}  message={this.state.message} attemptCount={this.state.attemptAmount}/>
      </div>
    );
  }
}

