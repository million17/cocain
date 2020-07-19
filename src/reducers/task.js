import * as constants from './../commons/contants';
import { toastError } from '../helpers/toastHelper';

const initState = {
  listTask: [],
  taskEditing: null,
};

const taskReducer = (state = initState, action) => {
  switch (action.type) {
    case constants.FETCH_TASK: {
      return {
        ...state,
        listTask: [],
      };
    }
    case constants.FETCH_TASK_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listTask: data,
      };
    }
    case constants.FETCH_TASK_FAIL: {
      const { err } = action.payload;
      toastError(err);
      return {
        ...state,
        listTask: [],
      };
    }
    case constants.FILTER_TASK_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listTask: data,
      };
    }
    case constants.ADD_TASK: {
      return {
        ...state,
      };
    }
    case constants.ADD_TASK_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listTask: [data].concat(state.listTask),
      };
    }
    case constants.ADD_TASK_FAIL: {
      const { error } = action.payload;
      toastError(error);
      return {
        ...state,
        error,
      };
    }

    case constants.SET_TASK_EDITING: {
      const { task } = action.payload;
      return {
        ...state,
        taskEditing: task,
      };
    }
    default:
      return state;
  }
};

export default taskReducer;
