import React, {Component} from 'react';
import Radium, {StyleRoot} from 'radium'; // In order to use media queries with the Radium we must wrap our Root component with StyleRoot

import './App.css';
import Person from './components/Person';

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

    render() {
        let personsList = null;
        const style = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
            ':hover': {
                backgroundColor: 'lightgreen',
                color: 'black'
            }
        };
        let classes = ['bold', 'red'].join(' ');

        if (this.state.showPersons) {
            personsList = this.state.persons.map((p, index) => {
                return <Person
                    click={() => this.personRemoveHandler(index)}
                    key={p.id}
                    name={p.name}
                    age={p.age}/>
            });

            style.backgroundColor = 'red';

            style[':hover'] = {
                backgroundColor: 'lightred',
                color: 'black'
            }
        }

        return (
            <StyleRoot>
                <div className="App">
                    <h1>React app</h1>
                    <p className={classes}>List of persons</p>
                    <button style={style} onClick={() => this.togglePersons()}>Toggle Persons</button>
                    {personsList}
                </div>
            </StyleRoot>
        );
    }
}

export default Radium(App);
