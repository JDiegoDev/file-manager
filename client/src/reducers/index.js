import { combineReducers } from "redux";
import fetchDataReducer from "./fetchDataReducer";
 
export default combineReducers({
  filesData: fetchDataReducer
});