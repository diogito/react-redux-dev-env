import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import { initialState } from './modules/initialState';

import ajaxStatus from './modules/ajaxStatus';
import stack from './modules/stack';

import { rootSaga } from './modules/stack';

export const history = createHistory();

const myRouterMiddleware = routerMiddleware(history);

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  stack,
  ajaxStatus
})

export const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(myRouterMiddleware, sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga);
