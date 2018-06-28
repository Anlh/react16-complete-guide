import React from 'react';

import classes from './Person.css';

const person = (props) => {
    return (
        <div className={classes.Person} onClick={props.click}>
            Name: {props.name}
            <br/>
            Age: {props.age}
        </div>
    );
};

export default person;