// IMPORT
import {put, call, takeLatest} from "redux-saga/effects";
import {ENDPOINTS} from "@/constants";
import {LocalLoginForm} from "./interface";
import {api} from "@/utils/api";

// ACTION TYPE

const FETCHING_FAIL = "PHARM/FETCHING_FAIL" as const;
const LOGIN = "AUTH/LOGIN" as const;
const LOGIN_SUCCESS = "AUTH/LOGIN_SUCCESS" as const;
const LOGOUT = "AUTH/LOGOUT" as const;
// ACTION CREATOR

export const authLogin = (form: LocalLoginForm) => ({
  type: LOGIN,
  payload: {form}
});

export const authLogout = () => ({
  type: LOGOUT
});

const authLoginSuccess = (accessToken: string) => ({
  payload: {accessToken},
  type: LOGIN_SUCCESS
});

export const fail = (e: any) => ({type: FETCHING_FAIL, payload: {error: e}});

// TYPE

type AuthAction =
  | ReturnType<typeof fail>
  | ReturnType<typeof authLogout>
  | ReturnType<typeof authLogin>
  | ReturnType<typeof authLoginSuccess>;

// INITIAL STATE

const initialState: Mandalart.AuthState = {};

// REDUCER

const reducer = (
  state = initialState,
  action: AuthAction
): Mandalart.AuthState => {
  switch (action.type) {
    case FETCHING_FAIL: {
      return {
        ...state,
        error: action.payload.error
      };
    }

    case LOGIN_SUCCESS: {
      const {accessToken} = action.payload;
      return {
        ...state,
        accessToken,
        error: null
      };
    }

    case LOGOUT: {
      return {};
    }

    default:
      return state;
  }
};

export default reducer;

// SAGA

const loginApi = (form: LocalLoginForm) =>
  api.post(ENDPOINTS.LOGIN_LOCAL, form);

function* loginSaga(action: ReturnType<typeof authLogin>) {
  try {
    const {form} = action.payload;
    const {
      data: {result: accessToken}
    } = yield call(loginApi, form);
    yield put(authLoginSuccess(accessToken));
  } catch (e) {
    const err = e?.response?.data;
    if (err) yield put(fail(err));
    else yield put(fail(e));
  }
}

export function* authSaga() {
  yield takeLatest(LOGIN, loginSaga);
}
