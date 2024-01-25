const initialState = {
    count:100
}

const CounterRedecer2 = (state=initialState,action)=>{
    if(action.type === 'INCRE'){
        return{...state,count:state.count+100}
    }
    if(action.type === 'DECRE'){
        return{...state, count:state.count-100}
    }
    if(action.type === 'RES'){
        return{...state, count:initialState.count}
    }
    return state
}
export default CounterRedecer2