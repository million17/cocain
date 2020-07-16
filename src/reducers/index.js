import { combineReducers } from 'redux';
import taskReducer from './task';
const reducers = combineReducers({
  task: taskReducer,
});
export default reducers;
