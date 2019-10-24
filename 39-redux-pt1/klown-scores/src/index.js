import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import './index.css';
import App from './App';

let reducer = (state, action) => {

    switch (action.type) {
        case "beef":
            return { ...state, key: "steak" }
        case "killer":
            return { ...state, key: "klowns" }
    }

}







let store = createStore(reducer)
store.dispatch({ type: "beef" })
console.log("state: ", store.getState())
store.dispatch({ type: "killer" })
console.log("state: ", store.getState())







ReactDOM.render(<App />, document.getElementById('root'));
