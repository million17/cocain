import { fork, take, call, put, delay } from 'redux-saga/effects';
import * as constant from './../commons/contants';
import { showLoading, hideLoading } from './../actions/ui';
import { getList } from './../apis/task';
import { fetchListTaskSuccess, fetchListTaskFail } from '../actions/task';
/**
 * B1 : thực thi actions fetch task
 * B2 : gọi API, hiển thị loading
 * B3 : Kiểm tra status code
 * -- Nếu thành công
 * -- Nếu thất bại
 * B4 : Thực thi công việc tiếp theo
 */
function* watchFetchListTaskAction() {
  while (true) {
    yield take(constant.FETCH_TASK);
    yield put(showLoading());
    const resp = yield call(getList);
    const { status, data } = resp;
    if (status === constant.STATUS_CODE.SUCCESS) {
      yield put(fetchListTaskSuccess(data));
    } else {
      yield put(fetchListTaskFail(data));
    }
    yield delay(1000);
    yield put(hideLoading());
  }
}

function* rootSaga() {
  yield fork(watchFetchListTaskAction); // Theo dõi các action
}

export default rootSaga;
