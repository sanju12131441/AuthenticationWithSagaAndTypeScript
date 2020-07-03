export enum ActionTypes {
  LOGIN_REQUEST = 'LOGIN_REQUEST',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_FAILURE = 'LOGIN_FAILURE',
  LOGOUT = 'LOGOUT',
}

export interface LoginRequest {
  type: ActionTypes.LOGIN_REQUEST;
  data: loginPayload
}

export interface loginPayload {
  email: string,
  password: string,
}


export interface LoginSuccess {
  type: ActionTypes.LOGIN_SUCCESS;
  idToken: string;
}

export interface LoginFailure {
  type: ActionTypes.LOGIN_FAILURE;
  error: string;
}

export interface Logout {
  type: ActionTypes.LOGOUT;
}

export type Action =
  | LoginRequest
  | LoginSuccess
  | LoginFailure
  | Logout;

export const loginRequest = (payload: loginPayload): LoginRequest => ({
  type: ActionTypes.LOGIN_REQUEST,
  data: payload
});

export const loginSuccess = (idToken: string): LoginSuccess => ({
  type: ActionTypes.LOGIN_SUCCESS,
  idToken,
});

export const loginFailure = (error: string): LoginFailure => ({
  type: ActionTypes.LOGIN_FAILURE,
  error,
});

export const logout = (): Logout => ({
  type: ActionTypes.LOGOUT,
});