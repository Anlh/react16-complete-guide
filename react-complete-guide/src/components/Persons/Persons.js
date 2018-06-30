import React, {PureComponent} from 'react';

import Person from './Person/Person';

// const persons = (props) => props.persons.map((person, index) => { // Next gen javascript syntax if the code inside the function return something we can use it like this
//     return <Person
//         click={() => props.clicked(index)}
//         key={person.id}
//         position={index}
//         ref={this.lastPersonRef}
//         name={person.name}
//         age={person.age}
//         changed={(event) => props.changed(event.target.value, person.id)}/>;
// });

class Persons extends PureComponent {
    constructor(props) {
        super(props);
        console.log('[Persons.js] Inside constructor()', props);
        this.lastPersonRef = React.createRef();
    }

    componentWillMount() {
        console.log('[Persons.js] Inside componentWillMount()');
    }

    componentDidMount() {
        console.log('[Persons.js] Inside componentDidMount()');
        // This will contain a reference to the last instance of Person, and will call the method focus from the Person class
        this.lastPersonRef.current.focus();
    }


    render() {
        console.log('[Persons.js] Inside render()');
        return this.props.persons.map((person, index) => { // Next gen javascript syntax if the code inside the function return something we can use it like this
            return <Person
                click={() => this.props.clicked(index)}
                key={person.id}
                position={index}
                ref={this.lastPersonRef} // In order to use encapsulated ref property we need to use React.forwardedRef method in the withClass HOC function
                name={person.name}
                age={person.age}
                changed={(event) => this.props.changed(event.target.value, person.id)}/>;
        });
    }

}

export default Persons;