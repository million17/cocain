import * as constants from './../commons/contants';

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
      return {
        ...state,
        listTask: [],
      };
    default:
      return state;
  }
};

export default taskReducer;
