import React, {Component} from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import './App.css';

class App extends Component {

  state = {
    username: 'Jon Snow',
    age: 18
  }

  changeNameHandler = (event) => {
    this.setState(
      {
        username: event.target.value
      }
    );
  };

  incrementAgeHandler = () => {
    let newage = this.state.age;
    newage++;

    this.setState(
      {
        age: newage
      }
    )
  };

  render(){
    return (
      <div className="App">
        <UserInput name={this.state.username} changedName={this.changeNameHandler} incrementAge={this.incrementAgeHandler}/>
        <UserOutput name={this.state.username} age={this.state.age}/>
      </div>
    );
  }
}

export default App;
