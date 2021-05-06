import { combineReducers } from "redux";
import toprated from "./toprated";
import trending from "./trending";
import upcoming from "./upcoming";

const rootReducer = combineReducers({
  toprated,
  trending,
  upcoming,
});

export default rootReducer;
