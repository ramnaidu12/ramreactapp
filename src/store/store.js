import {combineReducers,createStore} from 'redux'
import CounterReducer from './reducer/counter'
import CounterRedecer2 from './reducer/CounterReducer'

let Store=createStore(combineReducers({
    count:CounterReducer,
    count2:CounterRedecer2,
    
}))

export default Store