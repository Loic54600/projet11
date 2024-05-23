import { combineReducers } from "redux";
import userReducer from "../redux/user.redux";
import logReducer from "../redux/log.redux";

const rootReducer = combineReducers({
  user: userReducer,
  log: logReducer,
});

export default rootReducer;