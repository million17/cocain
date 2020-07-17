import * as constants from './../commons/contants';

export const fetchListTask = () => {
  return {
    type: constants.FETCH_TASK,
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

// export const fetchListTaskRequest = () => {
//   return (dispatch) => {
//     dispatch(fetchListTask());
//     taskApis
//       .getList()
//       .then((resp) => {
//         const { data } = resp;
//         dispatch(fetchListTaskSuccess(data));
//       })
//       .catch((err) => {
//         dispatch(fetchListTaskFail(err));
//       });
//   };
// };
