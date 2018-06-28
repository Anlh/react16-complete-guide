import React from 'react';

const person = (props) => {
    return (
        <div>
            <p onClick={props.click}>{props.name}</p>
            <p>{props.children}</p>
            <input type="text" placeholder="Change the name" onChange={props.changeName}/>
        </div>
    );
};


export default person;