import { combineReducers } from "redux";
import profilRedux from "../redux/profil.redux";
import loginRedux from "../redux/log.redux";

const rootReducer = combineReducers({
  user: profilRedux,
  log: loginRedux,
});

export default rootReducer;