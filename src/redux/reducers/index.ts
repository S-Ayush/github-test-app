import { combineReducers } from "redux";
import starReducer from "./starReducer";
import userReducer from "./userReducer";
export default combineReducers({
  userData: userReducer,
  starRepos: starReducer,
});
