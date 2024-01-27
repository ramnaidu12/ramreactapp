import {combineReducers,createStore} from 'redux'
import arjreducer from './reducer/arjreducer'

let store=createStore(combineReducers({arjcount:arjreducer}))

export default store