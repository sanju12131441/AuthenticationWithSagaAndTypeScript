import {
  put,
  take,
  takeEvery,
  delay
} from 'redux-saga/effects';

import {
  ActionTypes,
  LoginRequest,
  loginSuccess,
  logout,
  loginFailure
} from './Actions';

export function* loginRequestSaga(action: LoginRequest) {
  if (action.data.email == 'test@test.com' && action.data.password === 'test') {
    yield (delay(3000))
    yield put(loginSuccess('token'));
  } else {
    yield (delay(3000))
    yield put(loginFailure('failed'));
  }
}

export function* watchLoginRequest() {
  console.log('watchLoginRequest!');
  yield takeEvery(ActionTypes.LOGIN_REQUEST, loginRequestSaga);
}

export function* watchLoginSuccess() {
  yield take(ActionTypes.LOGIN_SUCCESS);
  console.log('Success');
}

export function* watchLoginFailure() {
  yield take(ActionTypes.LOGIN_FAILURE);
  console.log('fail');
}

export function* watchLogout() {
  yield takeEvery(ActionTypes.LOGOUT, logout);
}