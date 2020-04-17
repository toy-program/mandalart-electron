// IMPORT
import {put, call, takeLatest} from "redux-saga/effects";
import {ChartEntity} from "@toy-program/mandalart-model";
import {ENDPOINTS} from "@/constants";
import {api} from "@/utils/api";

// ACTION TYPE

const FETCHING_FAIL = "SILO/FETCHING_FAIL" as const;
const GET_CHARTLIST = "SILO/GET_CHARTLIST" as const;
const GET_CHARTLIST_SUCCESS = "SILO/GET_CHARTLIST_S" as const;
// ACTION CREATOR

export const getSiloChartList = (siloId: number) => ({
  payload: {siloId},
  type: GET_CHARTLIST
});

const getSiloChartListSuccess = (chartList: Array<ChartEntity>) => ({
  payload: {chartList},
  type: GET_CHARTLIST_SUCCESS
});

export const fail = (e: any) => ({type: FETCHING_FAIL, payload: {error: e}});

// TYPE

type AuthAction =
  | ReturnType<typeof fail>
  | ReturnType<typeof getSiloChartList>
  | ReturnType<typeof getSiloChartListSuccess>;

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
