import React from 'react';
import Radium from 'radium';

import './Person.css';

const person = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };
    return (
        <div className="Person" style={style} onClick={props.click}>
            Name: {props.name}
            <br/>
            Age: {props.age}
        </div>
    );
};

export default Radium(person);