import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return(
        <div className='UserOutput'>
            <span>New Character</span>
            <p>Username: {props.name}</p>
            <p>Age: {props.age} </p>
        </div>
    )
}

export default userOutput;