
const initialstate={
    count:0,
    istouch:'',
    i:0
}
let CounterReducer=(state=initialstate,action)=>{
if(action.type=="ron"){

  
    return {...state,count:state.count+1,istouch:state.istouch="ronaldo",}
}
if(action.type=="pepe"){

 
    return {...state,count:state.count+1,istouch:state.istouch="pepe",}
}
if(action.type=="Marcelo"){

  
    return {...state,count:state.count+1,istouch:state.istouch="Marcelo" }
}
if(action.type=="Modric"){

 
    return {...state,count:state.count+1,istouch:state.istouch="Modric"}
}
if(action.type=="Benzema"){

    return {...state,count:state.count+1,istouch:state.istouch="Benzema",}
}
if(action.type=="Rooney"){


    return {...state,count:state.count+1,istouch:state.istouch="Rooney",}
}
if(action.type=="Ram"){


    return {...state,count:state.count+1,istouch:state.istouch="Ram"}
}
if(action.type=="Jasim"){


    return {...state,count:state.count+1,istouch:state.istouch="Jasim",i:state.i+1}
}


return state
}
export default CounterReducer