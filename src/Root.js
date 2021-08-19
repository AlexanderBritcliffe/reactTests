import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import reducers from 'reducers';

export default ({ children, initialState = {} }) => {
  const store = createStore(reducers, initialState, applyMiddleware(reduxPromise));
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

//putting children and initial state on line 6 allows us to take
//props away from children and initial state on like 8 and 9

//line 9 is simply a refrence to <App /> in Root.js file
//this gives access to a store by wrapping root around it
