import thunkMiddleware from 'redux-thunk'
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import skycopApp from './reducers/skycopApp';
import App from './components/App';

const store = createStore(skycopApp, applyMiddleware(thunkMiddleware));

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
