import React from 'react';

const person = (props) => {
    return (
        <div onClick={props.click}>
            Name: {props.name}
            <br/>
            Age: {props.age}
        </div>
    );
};

export default person;