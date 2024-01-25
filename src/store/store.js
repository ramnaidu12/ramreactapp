import {combineReducers,createStore} from 'redux'
import CounterReducer from './reducer/counter'
import CounterRedecer2 from './reducer/CounterReducer'
import countReducer3 from './reducer/CounterReducer3'
let Store=createStore(combineReducers({
    count:CounterReducer,
    count2:CounterRedecer2,
    count3:countReducer3,
}))

export default Store