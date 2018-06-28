import React from 'react';

import './Person.css';

const person = (props) => {

    return (
        <div className="Person" onClick={props.click}>
            Name: {props.name}
            <br/>
            Age: {props.age}
        </div>
    );
};

export default person;