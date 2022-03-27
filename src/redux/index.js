import stopno from "./Reducer/stopnumber";
import isloggedin from "./Reducer/isloggedin";
import { combineReducers } from "redux";

const allreducers = combineReducers({ stopno, isloggedin});
//Store
export default allreducers;
//Reducer

//Dispatch

//Action
