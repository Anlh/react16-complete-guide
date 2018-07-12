import * as actionTypes from '../actions/actionTypes'

const initialState = {
    counter: 0
};
//NOTE IMPORTANT: UPDATE STATE IMMUTABLY, DON'T UPDATE STATE DIRECTLY
// CREATE A NEW CLONE/REFERENCE AND MANIPULATE THAT CLONE WITH THE VALUES
const reducer = (state = initialState, action) => {
    // Set a new initialState, we need to create a clone of the current state, and mutate his properties with the new values
    switch (action.type) {
        case actionTypes.INCREMENT:
            // We cant create a new clone using Object.assign
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1;
            return newState;
        case actionTypes.DECREMENT:
            return {
                ...state,// Or we can use the spread operator (this will clone "all" the current properties inside initialState)
                counter: state.counter - 1 // This last one will update the counter passed above first
            };
        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.value
            };
        case actionTypes.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.value
            };
        default:
            return state;
    }
};

export default reducer;