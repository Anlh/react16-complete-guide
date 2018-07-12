import * as actionTypes from '../actions.constants'

const initialState = {
    results: []
};
//NOTE IMPORTANT: UPDATE STATE IMMUTABLY, DON'T UPDATE STATE DIRECTLY
// CREATE A NEW CLONE/REFERENCE AND MANIPULATE THAT CLONE WITH THE VALUES
const reducer = (state = initialState, action) => {
    // Set a new initialState, we need to create a clone of the current state, and mutate his properties with the new values
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                // results: state.results.push() Using push like this would mutate the original results property state
                results: state.results.concat({id: new Date(), value: action.result}) // This will create a new array with the old values plus the new ones we want to pass
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
        default:
            return state;
    }
};

export default reducer;