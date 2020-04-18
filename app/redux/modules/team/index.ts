// IMPORT
import {put, call, takeLatest} from "redux-saga/effects";
import {TeamEntity} from "@toy-program/mandalart-model";
import {ENDPOINTS} from "@/constants";
import {authApi} from "@/utils/api";

// ACTION TYPE

const FETCHING_FAIL = "SILO/FETCHING_FAIL" as const;
const GET_TEAMS = "TEAM/GET_TEAMS" as const;
const GET_TEAMS_SUCCESS = "TEAM/GET_TEAMS_S" as const;
// ACTION CREATOR

export const getTeams = (userId: number, token: string) => ({
  payload: {userId, token},
  type: GET_TEAMS
});

const getTeamsSuccess = (teamList: Array<TeamEntity>) => ({
  payload: {teamList},
  type: GET_TEAMS_SUCCESS
});

export const fail = (e: any) => ({type: FETCHING_FAIL, payload: {error: e}});

// TYPE

type AuthAction =
  | ReturnType<typeof fail>
  | ReturnType<typeof getTeamsSuccess>
  | ReturnType<typeof getTeams>;

// INITIAL STATE

const initialState: Mandalart.TeamState = {};

// REDUCER

const reducer = (
  state = initialState,
  action: AuthAction
): Mandalart.TeamState => {
  switch (action.type) {
    case FETCHING_FAIL: {
      return {
        ...state,
        error: action.payload.error
      };
    }

    case GET_TEAMS_SUCCESS: {
      const {teamList} = action.payload;
      return {
        teamList
      };
    }

    default:
      return state;
  }
};

export default reducer;

// SAGA

const getTeamsApi = (userId: number, token: string) => {
  return authApi(token).get(ENDPOINTS.GET_TEAMLIST(userId));
};

function* getTeamsSaga(action: ReturnType<typeof getTeams>) {
  try {
    const {userId, token} = action.payload;
    const {data} = yield call(getTeamsApi, userId, token);
    yield put(getTeamsSuccess(data.result));
  } catch (e) {
    const err = e?.response?.data;
    if (err) yield put(fail(err));
    else yield put(fail(e));
  }
}

export function* authSaga() {
  yield takeLatest(GET_TEAMS, getTeamsSaga);
}
