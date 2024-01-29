let initialvalue={
    todos:['bike','house','getmarried']
}

let todoReducer=function(state=initialvalue,action){
   if(action.type==='addtodo'){
return {...state,todos:[...state.todos,action.payload]}
   }

   if(action.type==='del'){

   let temp=[...state.todos]
   temp.splice(action.index,1)
   return{...state,todos:[...temp]}
   }
   
    return state
}
export default todoReducer