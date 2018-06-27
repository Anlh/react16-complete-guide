import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        name: 'Tiago'
    };
    render() {
        return (
            <div className="App">
                <button onClick={() => this.setState({name: 'Helder'})}>Change name</button>
                <Person name={this.state.name}> My hobbies </Person>
            </div>
        );
    }
}

export default App;
