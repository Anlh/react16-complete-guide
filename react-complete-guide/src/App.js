import React, {Component} from 'react';
import './App.css';

import Validation from './components/Validation.component';
import Char from './components/Char.component';


class App extends Component {
    state = {
        text: ''
    };

    charRemoveHandler = (index) => {
        let textToArr = this.state.text.split('');
        textToArr.splice(index, 1);
        this.setState({text: textToArr.join('')});
    };

    changeLengthHandler = (newValue) => {
        this.setState({text: newValue});
    };

    render() {
        const charComponents = this.state.text.split('').map((char, index) => {
            return <Char
                charClicked={()=> this.charRemoveHandler(index)}
                chaR={char}
                key={index}/>
        });

        return (
            <div className="App">
                <input type="text" value={this.state.text} onChange={(event) => this.changeLengthHandler(event.target.value)}/>
                <p>{this.state.text.length}</p>
                <Validation onTextInserted={this.state.text.length}/>
                {charComponents}
            </div>
        );
    }
}

export default App;
