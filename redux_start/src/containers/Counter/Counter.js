import React, {Component} from 'react';
import {connect} from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionCreators from '../../store/actions/index';

class Counter extends Component {
    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr}/>
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter}/>
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}/>
                <CounterControl label="Add 5" clicked={this.props.onAddCounter.bind(null, 5)}/>
                <CounterControl label="Subtract 5" clicked={this.props.onSubCounter.bind(null, 5)}/>
                <hr/>
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store result</button>
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
        ctr: state.ctr.counter, // state give us the global counter that we defined in the redux store,
        storedResults: state.res.results //
    };
};

// Dispatch/publish actions from the class Counter to the redux Store
const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(actionCreators.increment()),
        onDecrementCounter: () => dispatch(actionCreators.decrement()),
        onAddCounter: (value) => dispatch(actionCreators.add(value)),
        onSubCounter: (value) => dispatch(actionCreators.subtract(value)),
        onStoreResult: (result) => dispatch(actionCreators.storeResult(result)),
        onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Counter);