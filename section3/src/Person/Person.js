import React from 'react';
import './Person.css';
// Don't have to import { Component } since this is not a class that extends components
// Need this import to use React.createElement

// Super cool ES6 syntax (very similar to lambda functions
// Stateless function is the function arguments => { function body }
// Use {} to execute function calls or operations
// Attributes are passed as arguments into component as properties which
//   is named "props" here (which can be named anything)
const person = (props) => {
    return (
        <div className='Person'>
            <p onClick={props.click}>Name: {props.name} <br></br> Age: {props.age} </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}

// Make sure to allow the function to be imported using export:
export default person;