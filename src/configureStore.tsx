import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';


export function configureStore () {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];

  const middleware =   compose(applyMiddleware(...middlewares));
  

  const store = createStore(
    rootReducer,
    middleware,
  );

  sagaMiddleware.run(rootSaga);

  return store;
}
