import { combineReducers } from 'redux';

import authReducer, { AuthState } from './auth/reducer';

export interface AppState {
  auth: AuthState;
}

export const rootReducer = combineReducers<AppState>({
  auth: authReducer,
});

export default rootReducer;