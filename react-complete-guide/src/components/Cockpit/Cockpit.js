import React from 'react';
import Aux from '../../hoc/Aux';

import classes from './Cockpit.css';

const cockpit = (props) => {
    const assignedClasses = [];
    let btnClass = classes.Button;

    if (props.showPersons) {
        btnClass = [classes.Button, classes.Red].join(' ');
    }

    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red);
    }

    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold);
    }

    return (
        <Aux className={classes.Cockpit}> {/* Replace the old wrapper div - it can mess up with or view styles*/}
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>List of persons</p>
            <button
                className={btnClass}
                onClick={props.clicked}>Toggle Persons
            </button>
        </Aux>
    );
};

export default cockpit;