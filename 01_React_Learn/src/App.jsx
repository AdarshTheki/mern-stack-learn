import React from 'react';
import { store, increment, decrement } from './12-ReduxToolkit';
import { Provider, useDispatch, useSelector } from 'react-redux';
import './index.css';

export default function App() {
    return (
        <div>
            <React.StrictMode>
                <Provider store={store}>
                    <ReduxToolkit />
                </Provider>
            </React.StrictMode>
        </div>
    );
}

function ReduxToolkit() {
    const state = useSelector((state) => state.counter);
    const data = useSelector((state) => state);
    const dispatch = useDispatch();
    console.log(data)
    return (
        <div>
            <button onClick={() => dispatch(increment())}>increment</button>
            <p>count: {state.count}</p>
            <button onClick={() => dispatch(decrement())}>decrement</button>
        </div>
    );
}
