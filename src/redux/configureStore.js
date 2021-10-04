import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import rocketsReducer from './rockets/rockets';

const rootReducer = combineReducers({
  rockets: rocketsReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(logger),
);

export default store;
