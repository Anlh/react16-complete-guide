import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Aux';
import {AuthContext} from '../../../containers/App'

class Person extends PureComponent {
    constructor(props) {
        super(props);
        console.log('[Person.js] Inside Constructor', props);
        // React 16.3 > let us use a built in method that let us pass the reference elements like
        this.inputElement = React.createRef();
    }

    componentWillMount() {
        console.log('[Person.js] Inside componentWillMount()');
    }

    // Will run after render hook
    componentDidMount() {
        console.log('[Person.js] Inside componentDidMount()');
        // if we want to focus only the first element
        // if (this.props.position === 0) {
        //     this.inputElement.current.focus();
        // }
    }

    focus() {
        this.inputElement.current.focus();
    }

    render() {
        console.log('[Person.js] Inside render()');
        return (
            <Aux>
                <AuthContext.Consumer>
                    {auth => auth ? <p>I'm authenticated!</p> : null}
                </AuthContext.Consumer>
                <p onClick={this.props.click}>Name: {this.props.name}</p>
                <br/>
                <p>Age: {this.props.age}</p>
                <input
                    ref={this.inputElement}
                    type="text"
                    onChange={this.props.changed}
                />
            </Aux>
        )
    }
}

Person.propTypes = {
    click: PropTypes.func, // The click property must be a function
    name: PropTypes.string, // The name property must be a string
    age: PropTypes.number, // The number property must be a number
    changed: PropTypes.func // The changed property must be a function
};

export default withClass(Person, classes.Person);