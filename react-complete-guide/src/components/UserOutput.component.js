import React from 'react';

const userOutput = (props) => {
    return (
        <div>
            <p>Hello my name is {props.userName}</p>
            <p>2nd paragraph</p>
        </div>
    );
};

export default userOutput;