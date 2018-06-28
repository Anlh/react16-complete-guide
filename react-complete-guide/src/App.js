import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {id: '1', name: 'Pedro'},
            {id: '2', name: 'Daniel'}
        ],
        showPersons: false
    };

    // Using the arrow syntax we can pass the function directly on the event click
    // this keyword will reference the App class and not to the event context
    // if we had use a normal function this would emit an error
    switchNameHandler = (newName, id) => {
        const  personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex] // return a new reference for the selected person with all the properties that the person from state has
        };

        // Other approach to create a new object reference in memory with old syntax the above one is next gen js syntax
        // const person = Object.assign({}, this.state.persons[personIndex]);

        person.name = newName;

        // now we need to update the array list with the new person, removing the old one
        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({persons: persons}); // or just this.setState({persons})
    };

    deletePersonHandler = (personIndex) => {
        // Mutate the state directly like this, is a bad practice, it can throw unexpected side effects
        // const persons = this.state.persons;
        // We should instead create a new copy in memory of the persons array
        const persons =[...this.state.persons]; // Equal to ES5 syntax this.state.persons.slice();
        persons.splice(personIndex, 1);
        this.setState({persons});
    };

    togglePersonHandler = () => {
        this.setState({showPersons: !this.state.showPersons});
    };

    render() {
        // Instead of using conditional JSX code inside the return statement
        // Since every time the state changes the render method is called, and we can do it like this
        // This is a best practice
        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    {
                        // Must return valid JSX syntax in order to be rendered properly
                        this.state.persons.map((person, index) => {
                            return <Person
                                click={() => this.deletePersonHandler(index)}
                                changeName={(event) => this.switchNameHandler(event.target.value, person.id)}
                                key={person.id} // this key should be a unique identifier like an id from the database
                                name={person.name}/>
                        })
                    }
                </div>
            );
        }

        return (
            <div className="App">
                {/*Be aware This is cost inefficient than the bind syntax,
                Because the DOM can be updated many times*/}
                <button onClick={this.togglePersonHandler}>Toggle Persons</button>
                {persons}
                {/*{
                    this.state.showPersons ?
                        <div>
                            <Person name={this.state.persons[0].name}/>
                            <Person
                                click={this.switchNameHandler.bind(this, 'Rui')}
                                name={this.state.persons[1].name}/>
                        </div> : null
                }*/}
            </div>
        );
    }
}

export default App;
