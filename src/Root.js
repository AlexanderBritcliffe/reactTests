import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from 'reducers';

export default ({ children, initialState = {} }) => {
  return (
    <Provider store={createStore(reducers, initialState)}>
      {children}
    </Provider>
  );
};

//putting children and initial state on line 6 allows us to take
//props away from children and initial state on like 8 and 9

//line 9 is simply a refrence to <App /> in Root.js file
//this gives access to a store by wrapping root around it
