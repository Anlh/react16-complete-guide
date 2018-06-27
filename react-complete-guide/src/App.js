import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {name: 'Pedro'},
            {name: 'Daniel'}
        ],
        showPersons: false
    };

    // Using the arrow syntax we can pass the function directly on the event click
    // this keyword will reference the App class and not to the event context
    // if we had use a normal function this would emit an error
    switchNameHandler = (newName = 'Helder') => {
        this.setState({
            persons: [
                {name: newName},
                {name: 'Tiago'}
            ]
        });
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
                        this.state.persons.map(person => {
                            return <Person key={person.name} name={person.name}/>
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
