import { fork, take, call } from 'redux-saga/effects';
import * as constant from './../commons/contants';

import { getList } from './../apis/task';

function* watchFetchListTaskAction() {
  yield take(constant.FETCH_TASK);

  const resp = yield call(getList);
  const { status, data } = resp;
  if (status === constant.STATUS_CODE.SUCCESS) {
    console.log(data);
  } else {
    console.log(status);
  }
}

function* rootSaga() {
  yield fork(watchFetchListTaskAction); // Theo dõi các action
}

export default rootSaga;
