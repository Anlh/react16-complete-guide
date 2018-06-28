import React, {Component} from 'react';
import classes from './App.css'; // Css module loader let us use css classes as properties attached to this classes object
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
            cursor: 'pointer'
        };
        if (this.state.showPersons) {
            personsList = this.state.persons.map((p, index) => {
                return <Person
                    click={() => this.personRemoveHandler(index)}
                    key={p.id}
                    name={p.name}
                    age={p.age}/>
            });

            style.backgroundColor = 'red';
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
                <button style={style} onClick={() => this.togglePersons()}>Toggle Persons</button>
                {personsList}
            </div>
        );
    }
}

export default App;
