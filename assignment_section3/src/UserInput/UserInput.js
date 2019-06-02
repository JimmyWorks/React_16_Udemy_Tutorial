import React from 'react';
import './UserInput.css';

const userInput = (props) => {

    const title = {
        textAlign: 'left',
        fontWeight: 'bold'

    }

    const options = {
        textAlign: 'justify'
    }

    return(
        <div className='UserInput'>
            <p style={title}>Character Creation</p>
            <div style={options}>
                <span>Username: {' '}</span>
                <input type='text' onChange={props.changedName} value={props.name}></input>
            </div>
            <button onClick={props.incrementAge}>Increment Age</button>
        </div>
    )
}

export default userInput;