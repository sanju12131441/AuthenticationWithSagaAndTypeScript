import { all, call } from 'redux-saga/effects';

import { 
  watchLoginFailure, 
  watchLoginRequest, 
  watchLoginSuccess, 
  watchLogout 
} from './auth/sagas';

export default function* rootSaga() {
  yield all([
    watchLoginRequest(),
    watchLoginSuccess(),
    watchLoginFailure(),
    watchLogout(),
  ]);
}