import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {name: 'Daniel'}
        ]
    };

    changeNameHandler = (newName) => {
        this.setState({
            persons: [
                {name: newName},
            ]
        });
    };

    render() {
        const btnStyle = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        return (
            <div className="App">
                {/*Be aware This is cost inefficient than the bind syntax,
                Because the DOM can be updated many times*/}
                <button style={btnStyle}>Button to style</button>
                <Person
                    change={this.changeNameHandler.bind(this)}
                    name={this.state.persons[0].name} />
            </div>
        );
    }
}

export default App;
