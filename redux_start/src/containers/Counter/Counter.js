import React, {Component} from 'react';
import {connect} from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions.constants';

class Counter extends Component {
    state = {
        counter: 0
    };

    counterChangedHandler = (action, value) => {
        switch (action) {
            case 'inc':
                this.setState((prevState) => {
                    return {counter: prevState.counter + 1}
                });
                break;
            case 'dec':
                this.setState((prevState) => {
                    return {counter: prevState.counter - 1}
                });
                break;
            case 'add':
                this.setState((prevState) => {
                    return {counter: prevState.counter + value}
                });
                break;
            case 'sub':
                this.setState((prevState) => {
                    return {counter: prevState.counter - value}
                });
                break;
        }
    };

    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr}/>
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter}/>
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}/>
                <CounterControl label="Add 5" clicked={this.props.onAddCounter.bind(null, 5)}/>
                <CounterControl label="Subtract 5" clicked={this.props.onSubCounter.bind(null, 5)}/>
                <hr/>
                <button onClick={this.props.onStoreResult}>Store result</button>
                <ul>
                    {this.props.storedResults.map(strResult => (
                        <li key={strResult.id} onClick={this.props.onDeleteResult.bind(null, strResult.id)}> {strResult.value} </li>
                    ))}
                </ul>
            </div>
        );
    }
}

// This will convert state returned from our redux Store and convert in to props
// to use on our Counter class container
const mapStateToProps = state => {
    // Go to the redux store and pass the values we want to use
    return {
        ctr: state.counter, // state give us the global counter that we defined in the redux store,
        storedResults: state.results //
    };
};

// Dispatch/publish actions from the class Counter to the redux Store
const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}),
        onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT}),
        onAddCounter: (value) => dispatch({type: actionTypes.ADD, value}),
        onSubCounter: (value) => dispatch({type: actionTypes.SUBTRACT, value}),
        onStoreResult: () => dispatch({type: actionTypes.STORE_RESULT}),
        onDeleteResult: (id) => dispatch({type: actionTypes.DELETE_RESULT, id})
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Counter);