const intialstate={
    count:1000
}
const countReducer3=function(state=intialstate,action){
    if(action.type==="INCREMENT"){
        return{...state,count:state.count+1000}
    }
    if(action.type==="DECREMENT"){
        return{...state,count:state.count-1000}
    }
    if(action.type==="RESET"){
        return{...state,count:intialstate.count}
    }
    return state
}
export default countReducer3

