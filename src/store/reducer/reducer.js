let initialsate={
    todos:['car','bike','house']
}
 
let todoreducer=function(state=initialsate,action){
    if(action.type="addbutton"){
        return{...state,state:action.payload}
    }
}
export default todoreducer