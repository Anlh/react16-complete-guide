const initialState = {
    persons: []
};


const personsReducer = (state = initialState, action) => {
    if (action.type === 'ADD_PERSON') {
        const newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name: 'Max',
            age: Math.floor(Math.random() * 40)
        };

        return {
            ...state,
            persons: state.persons.concat(newPerson)
        }
    } else if (action.type === 'DEL_PERSON') {
        const updateArray = state.persons.filter(person => person.id !== action.id);
        return {
            ...state,
            persons: updateArray
        }
    }

    return state;
};

export default personsReducer;