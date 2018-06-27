import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        name: 'Tiago'
    };

    // Using the arrow syntax we can pass the function directly on the event click
    // this keyword will reference the App class and not to the event context
    // if we had use a normal function this would emit an error
    switchNameHandler = () => {
        this.setState({name: 'Helder'});
    };

    render() {
        return (
            <div className="App">
                <button onClick={this.switchNameHandler}>Change name</button>
                <Person name={this.state.name}> My hobbies </Person>
            </div>
        );
    }
}

export default App;
