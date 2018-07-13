import * as actionTypes from '../actions/actionTypes'
import {updateObject} from "../utility";

const initialState = {
    results: []
};

// Helper functions to make the reducer leaner
const deleteResult = (state, action) => {
    const updatedArray = state.results.filter(result => result.id !== action.value);
    return updateObject(state, {results: updatedArray});
};

//NOTE IMPORTANT: UPDATE STATE IMMUTABLY, DON'T UPDATE STATE DIRECTLY
// CREATE A NEW CLONE/REFERENCE AND MANIPULATE THAT CLONE WITH THE VALUES
const reducer = (state = initialState, action) => {
    // Set a new initialState, we need to create a clone of the current state, and mutate his properties with the new values
    switch (action.type) {
        case actionTypes.STORE_RESULT: return updateObject(state, {results: state.results.concat({id: new Date(), value: action.result})});
        case actionTypes.DELETE_RESULT: return deleteResult(state, action);
        default: return state;
    }
};

export default reducer;