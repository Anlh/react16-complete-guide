import React from 'react';
import Aux from '../../hoc/Aux';

import classes from './Cockpit.css';

const cockpit = (props) => {
    const assignedClasses = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red);
    }

    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold);
    }

    return (
        <Aux> {/* Replace the old wrapper div - it can mess up with or view styles*/}
            <h1>{props.title}</h1>
            <p className={assignedClasses}>List of persons</p>
            <button
                className={btnClass}
                onClick={props.clicked}>Toggle Persons
            </button>
        </Aux>
    );
};

export default cockpit;