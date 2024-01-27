import { combineReducers,createStore } from "redux";
import todoreducer from "./reducer";


var store=createStore(combineReducers({todo:todoreducer}))