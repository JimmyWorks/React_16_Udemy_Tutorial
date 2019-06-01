import React, { useState, useEffect} from 'react';
import './App.css';
import Person from './Person/Person'

// This class extends component which is why it is specified in the import
const app = (props) => {

  const [personState, setPersonState] = useState({
    persons: [
        { name:     'John', age: 28 },
        { name:    'Jimmy', age: 30 },
        { name: 'Berenice', age: 29 }
    ]
  });

  const [otherState, setOtherState] = useState('some other value');


  console.log(personState, otherState);

  const switchNameHandler = (named, position) => {
    console.log(named, position);
    let currentState = {...personState};
    console.log(currentState);
    const newPerson = {name: named, age: currentState.persons[position].age};
    currentState.persons[position] = newPerson;

    console.log("new state:", currentState);

    setPersonState(
      currentState
    );
  };

  const nameChangedHandler = (event, index) => {
    console.log(event, index);
    setPersonState({
      persons: [
          { name: event.target.value, age: 29 },
          { name: 'Jimmy', age: 31 },
          { name: 'Berenice', age: 30 }
      ]
    })
  }

  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  };

  return (
    <div className="App">
          <h1> This is cool! </h1>
          <button
            style={style} 
            onClick={switchNameHandler.bind(this, 'Johnny', 0)}>Switch First Person to Johnny</button>
          <Person 
            name={personState.persons[0].name} 
            age={personState.persons[0].age} 
            click={switchNameHandler.bind(this, "Johnny", 0)}
            changed={nameChangedHandler}
            />
            <p>The cards below currently do not support dynamic name change... TODO</p>
          <Person 
            name={personState.persons[1].name} 
            age={personState.persons[1].age}
            click={switchNameHandler.bind(this, "James", 1)} >
            My Hobbies: Dancing 
          </Person>
          <Person 
            name={personState.persons[2].name} 
            age={personState.persons[2].age}/>
    </div>
  );
};

export default app;