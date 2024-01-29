let initialvalue={
    count:0
}

let counterReducer=function(state=initialvalue,action){

    if( action.type==='inc'){
       return{...state,count:state.count+1} 
    }
    if( action.type==='dec'){
        return{...state,count:state.count-1} 
     }
     if( action.type==='reset'){
        return{...state,count:initialvalue.count} 
     }

    return state

}
export default counterReducer