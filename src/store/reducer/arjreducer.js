let initialvalue={
    count :0
}

let arjreducer=function(state=initialvalue,action){

    if(action.type==="inc"){
        return{ ...state,state:initialvalue.count+1}
         }
         if(action.type==="dec"){
            return{ ...state,state:initialvalue.count+1}
             }
             if(action.type==="reset"){
                return{ ...state,state:initialvalue.count+1}
                 }
}
export default arjreducer