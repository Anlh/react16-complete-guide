import React, {Component} from 'react';
import classes from './App.css'; // Css module loader let us use css classes as properties attached to this classes object
import Persons from '../components/Persons/Persons';

class App extends Component {
    state = {
        persons: [
            {id: '1', name: 'Helder', age: 27},
            {id: '2', name: 'Rui', age: 30}
        ],
        showPersons: false
    };

    personRemoveHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    };

    togglePersons = () => {
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
        let personsList = null;
        let btnClass = '';

        if (this.state.showPersons) {
            personsList = <Persons
                clicked={this.personRemoveHandler}
                changed={this.nameChangedHandler}
                persons={this.state.persons}/>;

            btnClass = classes.Red;
        }

        const assignedClasses = [];
        if (this.state.persons.length <= 2) {
            assignedClasses.push(classes.red);
        }

        if (this.state.persons.length <= 1) {
            assignedClasses.push(classes.bold);
        }

        return (
            <div className={classes.App}>
                <h1>React app</h1>
                <p className={assignedClasses}>List of persons</p>
                <button
                    className={btnClass}
                    onClick={() => this.togglePersons()}>Toggle Persons
                </button>
                {personsList}
            </div>
        );
    }
}

export default App;
