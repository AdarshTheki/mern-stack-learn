import React, { useReducer } from 'react';
import { data } from './Data.js';

// default / initial state
const defaultState = {
    people: data,
    isLoading: false,
};

// Reducer function whatever state is returned the function is the new state
const reducerFunction = (state, action) => {
    if (action.type === 'CLEAR_LIST') {
        return { ...state, people: [] };
    }
    if (action.type === 'RESET_LIST') {
        return { ...state, people: data };
    }
    if (action.type === 'REMOVE_ITEM') {
        let newPeople = state.people.filter((person) => person.id !== action.payload.id);
        return { ...state, people: newPeople };
    }
    return state;
};

const UseReducerApp = () => {
    const [state, dispatch] = useReducer(reducerFunction, defaultState);
    console.log(state);
    const clearList = () => {
        dispatch({ type: 'CLEAR_LIST' });
    };
    const resetList = () => {
        dispatch({ type: 'RESET_LIST' });
    };
    const removeItem = (id) => {
        dispatch({ type: 'REMOVE_ITEM', payload: { id } });
    };

    return (
        <div>
            {state.people.map((ele) => {
                const { id, name } = ele;
                return (
                    <div key={id}>
                        <h3>{name}</h3>
                        <button onClick={() => removeItem(id)}>Remove One</button>
                    </div>
                );
            })}
            <button onClick={clearList}>ClearList</button>
            <button onClick={resetList}>ResetList</button>
        </div>
    );
};

export default UseReducerApp;
