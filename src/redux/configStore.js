import { createStore, compose, applyMiddleware } from 'redux';
import reducers from '../reducers';

const composerEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        shouldHotReload: false,
      })
    : compose;

const configStore = () => {
  const middleware = [];
  const enhancers = [applyMiddleware(...middleware)];
  const store = createStore(reducers, composerEnhancers(...enhancers));

  return store;
};

export default configStore;
