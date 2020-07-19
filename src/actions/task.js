import * as constants from './../commons/contants';

export const fetchListTask = (params = {}) => {
  return {
    type: constants.FETCH_TASK,
    payload: {
      params,
    },
  };
};

export const fetchListTaskSuccess = (data) => {
  return {
    type: constants.FETCH_TASK_SUCCESS,
    payload: {
      data,
    },
  };
};

export const fetchListTaskFail = (err) => {
  return {
    type: constants.FETCH_TASK_FAIL,
    payload: {
      err,
    },
  };
};

export const addTask = (title, description) => {
  return {
    type: constants.ADD_TASK,
    payload: {
      title,
      description,
    },
  };
};

export const addTaskSuccess = (data) => {
  return {
    type: constants.ADD_TASK_SUCCESS,
    payload: {
      data,
    },
  };
};

export const addTaskFail = (error) => {
  return {
    type: constants.ADD_TASK_FAIL,
    payload: {
      error,
    },
  };
};

export const setTaskEditing = (task) => {
  return {
    type: constants.SET_TASK_EDITING,
    payload: {
      task,
    },
  };
};

export const filterTask = (keyword) => ({
  type: constants.FILTER_TASK,
  payload: {
    keyword,
  },
});

export const filterTaskSuccess = (data) => ({
  type: constants.FETCH_TASK_SUCCESS,
  payload: {
    data,
  },
});

/*
B1 : fectch listTaskRequest()
B2 : Reset : state task => []
B3 : fetch listTastSuccess (data)
*/
