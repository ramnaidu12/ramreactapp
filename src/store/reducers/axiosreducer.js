 import products from "./products";

  let initialvalue={
    products,
    obj:[],
    ad:[]
  }

 let axiosreducer=function( state=initialvalue,action){
console.log(action.payload)
    if(action.type==='add'){
return {...state,obj:[...state.obj,action.payload]}
    }

    if(action.type==='check'){
        return{...state,ad:[...state.ad,action.payload]}
    }
         return state  

  }

  export default axiosreducer