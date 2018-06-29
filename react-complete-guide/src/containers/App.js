import React, {PureComponent} from 'react';

import classes from './App.css'; // Css module loader let us use css classes as properties attached to this classes object
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';


// Stateful component (Responsible for the state of our app)
// The Persons and Cockpit are functional components(stateless) they don't care about the state
class App extends PureComponent {
    constructor(props) {
        super(props);
        console.log('[App.js] Inside Constructor', props);

        this.state = {
            persons: [
                {id: '1', name: 'Helder', age: 27},
                {id: '2', name: 'Rui', age: 30}
            ],
            showPersons: false,
            toggleClicked: 0
        };
    }

    componentWillMount() {
        console.log('[App.js] Inside componentWillMount()');
    }

    componentDidMount() {
        console.log('[App.js] Inside componentDidMount()');
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[App.js] Inside shouldComponentUpdate()', nextProps, nextState);
    //     return nextProps.persons !== this.state.persons || nextState.showPersons !== this.state.showPersons;
    // }


    // Modern projects setups -  We can declare the state outside the constructor
    // state = {
    //     persons: [
    //         {id: '1', name: 'Helder', age: 27},
    //         {id: '2', name: 'Rui', age: 30}
    //     ],
    //     showPersons: false
    // };

    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    };

    togglePersonsHandler = () => {
        this.setState({showPersons: !this.state.showPersons});
    };

    nameChangedHandler = (newName, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        };

        person.name = newName;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({persons: persons}); // or just this.setState({persons})
    };

    render() {
        console.log('[App.js] Inside render()');
        let personsList = null;

        if (this.state.showPersons) {
            personsList = <Persons
                clicked={this.deletePersonHandler}
                changed={this.nameChangedHandler}
                persons={this.state.persons}/>;
        }

        return (
            <Aux>
                <button onClick={() => this.setState({showPersons: true})}>Show Persons</button>
                <Cockpit
                    title={this.props.title}
                    showPersons={this.state.showPersons}
                    persons={this.state.persons}
                    clicked={() => this.togglePersonsHandler()}/>
                {personsList}
            </Aux>
        );
    }
}

export default withClass(App, classes.App);
