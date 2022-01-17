import { userReducer } from "../redux/user/userReducer";
import { combineReducers, createStore } from "redux";

import { adminReducer } from "../redux/admin/adminReducer";
import { regReducer } from "../redux/register/regReducer";

const rootReducer = combineReducers({
  auth: adminReducer,
  user: userReducer,
  app: regReducer
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
