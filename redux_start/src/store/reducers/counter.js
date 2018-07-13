import * as actionTypes from '../actions/actionTypes'
import {updateObject} from '../utility';

const initialState = {
    counter: 0
};
//NOTE IMPORTANT: UPDATE STATE IMMUTABLY, DON'T UPDATE STATE DIRECTLY
// CREATE A NEW CLONE/REFERENCE AND MANIPULATE THAT CLONE WITH THE VALUES
const reducer = (state = initialState, action) => {
    // Set a new initialState, we need to create a clone of the current state, and mutate his properties with the new values
    switch (action.type) {
        case actionTypes.INCREMENT:
            return updateObject(state, {counter: state.counter + 1});
        case actionTypes.DECREMENT:
            return updateObject(state, {counter: state.counter - 1});
        case actionTypes.ADD:
            return updateObject(state, {counter: state.counter + action.value});
        case actionTypes.SUBTRACT:
            return updateObject(state, {counter: state.counter - action.value});
        default:
            return state;
    }
};

export default reducer;