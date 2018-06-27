import React from 'react';

const person = (props) => {
    const input = props.change ? <input type="text" onChange={(event) => props.change(event.target.value)}/> : null;
    return (
        <div>
            <p onClick={props.click}>{props.name}</p>
            <p>{props.children}</p>
            {input}
        </div>
    );
};


export default person;