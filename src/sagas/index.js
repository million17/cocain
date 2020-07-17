import {
  fork,
  take,
  call,
  put,
  delay,
  takeLatest, // Không cần vòng lặp, thay thế fork và take và vòng lặp vô tận
  select,
  // takeEvery Chaỵ ngay lập tức
} from 'redux-saga/effects';
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

function* filterTaskSaga({ payload }) {
  yield delay(500);
  // const { keyword } = payload;
  const { value } = payload.keyword;
  const list = yield select((state) => state.task.listTask);
  const filteredTask = list.filter((task) =>
    task.title.trim().toLowerCase().includes(value.trim().toLowerCase()),
  );
  yield put(fetchListTaskSuccess(filteredTask));
}

function* rootSaga() {
  yield fork(watchFetchListTaskAction); // Theo dõi các action
  yield takeLatest(constant.FILTER_TASK, filterTaskSaga);
}

export default rootSaga;
