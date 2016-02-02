import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import App from './App';

// Don't do this! You’re bringing DevTools into the production bundle.
import DevTools from './containers/DevTools';

const store = configureStore();

// Log the initial state
// console.log(store.getState());

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
// let unsubscribe = store.subscribe(() =>
//                                   console.log(store.getState())
//                                  );

render(
    <Provider store={store}>
    <div>
    <App />
    <DevTools />
    </div>
    </Provider>,
    document.getElementById('pixi-root')
);
