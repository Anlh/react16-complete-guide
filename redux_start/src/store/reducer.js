import * as actionTypes from './actions.constants'

const initialState = {
    counter: 0,
    results: []
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
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                // results: state.results.push() Using push like this would mutate the original results property state
                results: state.results.concat({id: new Date(), value: state.counter}) // This will create a new array with the old values plus the new ones we want to pass
            };
        case actionTypes.DELETE_RESULT:
            // 2 options for deleting an element IMMUTABLY
            // 1st option:
            // const id = 2;
            // const updatedArray = [...state.results];
            // updatedArray.splice(id, 1);

            // 2nd option:
            const updatedArray = state.results.filter(result => result.id !== action.id);
            return {
                ...state,
                results: updatedArray
            };
    }
    // Return the current state
    return state;
};

export default reducer;