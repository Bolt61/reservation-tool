import { createStore, applyMiddleware, compose } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import thunk from 'redux-thunk';
import reducers from './reducers';

export function configureStore(initialState = {}) {
  const enhancers = [
    applyMiddleware(
      apiMiddleware,
      thunk
    ),
    window.devToolsExtension ? window.devToolsExtension() : (f) => {
    return f;
  }];

  return createStore(reducers, initialState, compose(...enhancers));
}