import React from 'react';

const validation = (props) => {
    let message = 'Text too short';

    if (props.onTextInserted > 5) {
        message = 'Text long enough';
    }

    return <p>{message}</p>;
};

export default validation;