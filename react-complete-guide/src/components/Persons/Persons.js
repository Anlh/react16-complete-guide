import React from 'react';

import Person from './Person/Person';

const persons = (props) => props.persons.map((person, index) => { // Next gen javascript syntax if the code inside the function return something we can use it like this
    return <Person
        click={() => props.clicked(index)}
        key={person.id}
        name={person.name}
        age={person.age}
        changed={(event) => props.changed(event.target.value, person.id)}/>;
});

export default persons;