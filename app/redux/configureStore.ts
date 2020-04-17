import {createStore, combineReducers, applyMiddleware, Store} from "redux";
import createSagaMiddleware from "redux-saga";
import {all} from "redux-saga/effects";
import {persistReducer, PersistConfig} from "redux-persist";
import logger from "redux-logger";
import createElectronStorage from "redux-persist-electron-storage";
import authReducer, {authSaga} from "./modules/auth";

const rootPersistConfig = {
  key: "root",
  storage: createElectronStorage(),
  whitelist: []
};

const authPersistConfig: PersistConfig<Mandalart.AuthState> = {
  key: "auth",
  storage: createElectronStorage(),
  whitelist: ["accessToken"]
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer)
});

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield all([authSaga()]);
}

const middlewares = [sagaMiddleware, logger];

const store: Store<Mandalart.State> = createStore(
  persistReducer(rootPersistConfig, rootReducer),
  applyMiddleware(...middlewares)
);

export default store;

sagaMiddleware.run(rootSaga);
