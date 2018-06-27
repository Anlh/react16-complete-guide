import React, {Component} from 'react';
import './App.css';

import UserInput from "./components/UserInput.component";
import UserOutput from "./components/UserOutput.component";


class App extends Component {
    state = {
        userName: 'Helder'
    };

    onUserNameChangeHandler(userName) {
        this.setState({userName})
    }

    render() {
        return (
            <div className="App">
                <UserInput onUserNameChange={this.onUserNameChangeHandler.bind(this)}/>
                <UserOutput userName={this.state.userName}/>
            </div>
        );
    }
}

export default App;
