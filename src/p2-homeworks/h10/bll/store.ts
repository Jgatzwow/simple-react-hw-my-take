import { loadingReducer } from "./loadingReducer";
import { combineReducers, createStore } from "redux";
import { themeReducer } from "../../h12/bll/themeReducer";

const rootReducer = combineReducers({
  loading: loadingReducer,
  themes: themeReducer,
});

const store = createStore(rootReducer);

export default store;

export type AppStoreType = ReturnType<typeof rootReducer>;

// @ts-ignore
window.store = store; // for dev
