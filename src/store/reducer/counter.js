
const initialstate={
    count:0
}
let CounterReducer=(state=initialstate,action)=>{
if(action.type=="Inc"){
    return {...state,count:state.count+1}
    
}
if(action.type=="Dec"){
    return {...state,count:state.count-1}
    
}
if(action.type=="reset"){
    return {...state,count:initialstate.count}
    
}
return state
}
export default CounterReducer