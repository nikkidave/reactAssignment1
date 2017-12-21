import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
    state={
        characters:[
            {userName: 'gomez',key:'frozen'},
            {userName:'solo', key:'duff'}
        ]
    };
    manipulateState =(event)=>{
      this.setState({
         characters:[{
             userName:event.target.value, key:'mila'
         }]
      });
    };

  render() {
    const style = {
      backgroundColor:'lightblue',
        textAlign: 'center'
    };
    return (
      <div className="App">
        <h1 style={style}>Nikki's Spaceship</h1>
        <UserOutput userName={this.state.characters[0].userName}> </UserOutput>
        <UserOutput userName="saudi"> </UserOutput>
        <UserOutput userName="miso"> </UserOutput>
        <UserInput userName={this.state.characters[0].userName} changeEvent={this.manipulateState}></UserInput>
      </div>
    );
  }
}

export default App;
