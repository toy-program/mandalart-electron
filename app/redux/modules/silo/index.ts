// IMPORT
import {put, call, takeLatest} from "redux-saga/effects";
import {ChartEntity} from "@toy-program/mandalart-model";
import {ENDPOINTS} from "@/constants";
import {authApi} from "@/utils/api";

// ACTION TYPE

const FETCHING_FAIL = "SILO/FETCHING_FAIL" as const;
const GET_CHARTLIST = "SILO/GET_CHARTLIST" as const;
const GET_CHARTLIST_SUCCESS = "SILO/GET_CHARTLIST_S" as const;
// ACTION CREATOR

export const getSiloChartList = (siloId: number, token: string) => ({
  payload: {siloId, token},
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
): Mandalart.SiloState => {
  switch (action.type) {
    case FETCHING_FAIL: {
      return {
        ...state,
        error: action.payload.error
      };
    }

    case GET_CHARTLIST_SUCCESS: {
      const {chartList} = action.payload;
      return {
        chartList
      };
    }

    default:
      return state;
  }
};

export default reducer;

// SAGA

const getSiloChartListApi = (siloId: number, token: string) => {
  return authApi(token).get(ENDPOINTS.GET_SILO_CHART(siloId));
};

function* getSiloChartListSaga(action: ReturnType<typeof getSiloChartList>) {
  try {
    const {siloId, token} = action.payload;
    const {data} = yield call(getSiloChartListApi, siloId, token);
    yield put(getSiloChartListSuccess(data.result));
  } catch (e) {
    const err = e?.response?.data;
    if (err) yield put(fail(err));
    else yield put(fail(e));
  }
}

export function* authSaga() {
  yield takeLatest(GET_CHARTLIST, getSiloChartListSaga);
}
