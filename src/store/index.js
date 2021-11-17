import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { createWrapper } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import competencies from './competencies/reducer';

const rootReducer = combineReducers({
  competencies,
});

const makeStore = (preloadedState) =>
  createStore(rootReducer, preloadedState, composeWithDevTools(applyMiddleware(thunk)));

const wrapper = createWrapper(makeStore);

export default wrapper;
