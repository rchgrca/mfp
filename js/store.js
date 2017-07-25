// all data for application is kept in store
// rather than hold state in a component's state, it is held in the store state

// redux core concepts: actions, action creators, reducers

import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

//import the root reducer (contains, handles, updates actions and state)
import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

// create an object for the default data
const defaultState = {
    posts,
    comments
}

// chrome Redux devtool
const enhancers = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
)

const store = createStore(rootReducer, defaultState, enhancers);

export const history = syncHistoryWithStore(browserHistory, store);
// hot reload reducers
/*
if(module.hot){
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  })
}
*/


export default store;
