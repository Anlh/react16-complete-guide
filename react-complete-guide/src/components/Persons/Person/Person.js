import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Aux';

class Person extends PureComponent {
    constructor(props) {
        super(props);
        console.log('[Person.js] Inside Constructor', props);
    }

    componentWillMount() {
        console.log('[Person.js] Inside componentWillMount()');
    }

    componentDidMount() {
        console.log('[Person.js] Inside componentDidMount()');
    }

    /**
     * ************************
     *  Lifecycle update hooks
     * ************************
     */

    componentWillReceiveProps(nextProps) {
        console.log('[UPDATE Person.js] Inside componentWillReceiveProps()', nextProps);
    }

    // PureComponent imported do

    /**
     *
     * @param nextProps
     * @param nextState
     * @return boolean if the returns false this component lifecycle stops o/w it continues
     */
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[UPDATE Person.js] Inside shouldComponentUpdate', nextProps, nextState);
    //     return nextProps.persons !== this.props.persons;
    //     // return true;
    // }

    componentWillUpdate(nextProps, nextSate) {
        console.log('[UPDATE Person.js] Inside componentWillUpdate()', nextProps, nextSate);
    }

    componentDidUpdate() {
        console.log('[UPDATE Person.js] Inside componentDidUpdate()');
    }

    render() {
        console.log('[Person.js] Inside render()');
        return (
            <Aux>
                <p onClick={this.props.click}>Name: {this.props.name}</p>
                <br/>
                <p>Age: {this.props.age}</p>
            </Aux>
        )
    }
}

Person.propTypes = {
    click: PropTypes.func, // The click property must be a function
    name: PropTypes.string, // The name property must be a string
    age: PropTypes.number // The number property must be a number
};

export default withClass(Person, classes.Person);