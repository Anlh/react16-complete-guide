import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {name: 'Pedro'},
            {name: 'Daniel'}
        ]
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



    render() {
        return (
            <div className="App">
                {/*Be aware This is cost inefficient than the bind syntax,
                Because the DOM can be updated many times*/}
                <button onClick={() => this.switchNameHandler()}>Change name</button>
                <Person name={this.state.persons[0].name} />
                <Person
                    click={this.switchNameHandler.bind(this, 'Rui')}
                    name={this.state.persons[1].name}/>
            </div>
        );
    }
}

export default App;
