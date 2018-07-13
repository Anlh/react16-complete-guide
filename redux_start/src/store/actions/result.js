import {DELETE_RESULT, STORE_RESULT} from "./actionTypes";

// Action creators functions
const saveResult = (result) => {
    return  {
        type: STORE_RESULT,
        result
    };
};

export const storeResult = (result) => {
    return (dispatch, getState) => {
        setTimeout(() => {
            dispatch(saveResult(result));
        }, 2000);
    }
};

export const deleteResult = (id) => {
    return {
        type: DELETE_RESULT,
        id
    };
};