
import {combineReducers,createStore} from 'redux'
import axiosreducer from './reducers/axiosreducer'


let store=createStore(combineReducers({axi:axiosreducer}))

export default store