import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducer from './reducer'
import './index.css';
import App from './App';

let reduxStore = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={reduxStore}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, document.getElementById('root'));
