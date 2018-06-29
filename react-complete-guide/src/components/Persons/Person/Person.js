import React, {PureComponent} from 'react';

import classes from './Person.css';

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
            <div className={classes.Person} onClick={this.props.click}>
                Name: {this.props.name}
                <br/>
                Age: {this.props.age}
            </div>
        )
    }
}

export default Person;