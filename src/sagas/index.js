import {
  fork,
  take,
  call,
  put,
  delay,
  takeLatest, // Không cần vòng lặp, thay thế fork và take và vòng lặp vô tận
  // select,
  // takeEvery Chaỵ ngay lập tức
} from 'redux-saga/effects';
import * as constant from './../commons/contants';
import { showLoading, hideLoading } from './../actions/ui';
import { addTask, getList } from './../apis/task';
import {
  fetchListTaskSuccess,
  fetchListTaskFail,
  addTaskSuccess,
  addTaskFail,
  fetchListTask,
} from '../actions/task';
import { hideModal } from '../actions/modal';

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
    const actions = yield take(constant.FETCH_TASK);
    yield put(showLoading()); // Khi fetch task đc thực thi sẽ gọi
    const { params } = actions.payload;
    const resp = yield call(getList, params);
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
  const { value } = payload.keyword;
  yield put(
    fetchListTask({
      q: value,
    }),
  );
}

function* addTaskSaga({ payload }) {
  const { title, description } = payload;
  yield put(showLoading());
  const resp = yield call(addTask, {
    title,
    description,
    status: constant.STATUSES[0].value,
  });
  const { data, status } = resp;
  if (status === constant.STATUS_CODE.CREATED) {
    yield put(addTaskSuccess(data));
    yield put(hideModal());
  } else {
    yield put(addTaskFail(data));
  }
  yield delay(1000);
  yield put(hideLoading());
}

function* rootSaga() {
  yield fork(watchFetchListTaskAction); // Theo dõi các action
  yield takeLatest(constant.FILTER_TASK, filterTaskSaga);
  yield takeLatest(constant.ADD_TASK, addTaskSaga);
}

export default rootSaga;
