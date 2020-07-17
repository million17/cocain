import { combineReducers } from 'redux';
import taskReducer from './task';
import uiReducer from './ui';
const reducers = combineReducers({
  task: taskReducer,
  ui: uiReducer,
});
export default reducers;
