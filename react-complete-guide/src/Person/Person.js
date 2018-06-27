import React from 'react';

import './Person.css';

const person = (props) => {
    const input = props.change ? <input type="text" onChange={(event) => props.change(event.target.value)}/> : null;
    return (
        <div className="Person">
            <p onClick={props.click}>{props.name}</p>
            <p>{props.children}</p>
            {input}
        </div>
    );
};


export default person;