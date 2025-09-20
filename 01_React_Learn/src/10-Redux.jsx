/* REDUX Principle: 
https://redux.js.org/introduction/why-rtk-is-redux-today
Redux is really:
*  A single store containing "global" state
*  Dispatching plain object actions to the store when something happens in the app
*  Pure reducer functions looking at those actions and returning immutably updated state

Process Redux used
*  `createStore` to actually create a Redux store
*  `combineReducers` to combine multiple slice reducers into a single larger reducer
*  `applyMiddleware` to combine multiple middleware into a store enhancer
*  `compose` to combine multiple store enhancers into a single store enhancer
*/

// store.js
import { createStore } from 'redux';

const initialState = {
    counter: 0,
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                counter: state + 1,
            };
        case 'DECREMENT':
            return {
                ...state,
                counter: state - 1,
            };
        default:
            return state;
    }
};
export const store = createStore(reducer);

// import {store} from './store'
// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );

// action.js file
const incNumber = () => {
    return {
        type: 'INCREMENT',
    };
};
const decNumber = () => {
    return {
        type: 'DECREMENT',
    };
};

// This is App.js
export default function Redux() {
    return (
        <div>
            <h1>Increment / Decrement</h1>
            <h3>using React with Redux</h3>
            <div>
                <span>Increment</span>value<span>Decrement</span>
            </div>
        </div>
    );
}
