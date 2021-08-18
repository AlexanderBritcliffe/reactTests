import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from 'reducers';

export default (props) => {
  return (
    <Provider store={createStore(reducers, {})}>
      {props.children}
    </Provider>
  );
};

//line 9 is simply a refrence to <App /> in Root.js file
//this gives access to a store by wrapping root around it
