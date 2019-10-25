import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './index.css';
import App from './App';

let defaultState = {
    klown: 0,
    human: 0,
}

let reducer = (state, action) => {
    console.log(action)
    console.log("state", state)
    switch (action.type) {
        case "INCREASE KLOWN":
            return { ...state, klown: state.klown + 1 }
        case "INCREASE HUMAN":
            return { ...state, human: state.human + 1 }
        default:
            return state
    }

}
let reduxStore = createStore(reducer, defaultState)
ReactDOM.render(
    <Provider store={reduxStore}>
        <App />
    </Provider>, document.getElementById('root'));
