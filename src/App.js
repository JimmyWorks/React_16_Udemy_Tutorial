import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

// This class extends component which is why it is specified in the import
class App extends Component {

    state = {
        persons: [
            { name: 'John', age: 28 },
            { name: 'Jimmy', age: 30 },
            { name: 'Berenice', age: 29 }
        ]
    }

    render() {
        // This uses React.createElement under the hood
        // Everything in a .js (or .jsx) file is actually compiled by React
        // Anything that looks like html is actually jsx code that is compiled into
        // real html later
        return (
            <div className="App">
                <h1> This is cool! </h1>
                <p> This is actually jsx translated to html!</p>
                <button>Switch Name</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> My Hobbies: Dancing </Person>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
	// This is actually what happens:
	// return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));
  }
}

export default App;
