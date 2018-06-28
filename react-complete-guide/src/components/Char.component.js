import React from 'react'

const char = (props) => {
    const charStyles = {
        display: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        margin: '16px',
        border: '1px solid black'
    };

    return <p onClick={props.charClicked} style={charStyles}>{props.chaR}</p>
};

export default char;