import * as constants from './../commons/contants';
import { toastError } from '../helpers/toastHelper';
const initState = {
  listTask: [],
};

const taskReducer = (state = initState, action) => {
  switch (action.type) {
    case constants.FETCH_TASK:
      return {
        ...state,
        listTask: [],
      };
    case constants.FETCH_TASK_SUCCESS:
      const { data } = action.payload;
      return {
        ...state,
        listTask: data,
      };
    case constants.FETCH_TASK_FAIL:
      const { err } = action.payload;
      toastError(err);
      return {
        ...state,
        listTask: [],
      };
    case constants.FILTER_TASK_SUCCESS:
      return {
        ...state,
        listTask: [data],
      };
    default:
      return state;
  }
};

export default taskReducer;
