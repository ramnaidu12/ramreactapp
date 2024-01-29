import {combineReducers,createStore} from 'redux'
import todoReducer from './reducer/todolistreducer'
import counterReducer from './reducer/counterreducer'

let store=createStore(combineReducers({todo:todoReducer ,count:counterReducer}))

export default store
