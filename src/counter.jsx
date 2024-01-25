import React from "react"
import{connect} from "react-redux"
function Counter(props){

    return(
 <div className="border border-2 m-3 p-3 border-danger">

   <h1>Count:{props.count.count}</h1>

   <button onClick={()=>{props.dispatch({type:"Inc"})}}>Increment</button>
   <button onClick={()=>{props.dispatch({type:"Dec"})}}>deccrement</button>
   <button onClick={()=>{props.dispatch({type:"reset"})}}>reset</button>
       
</div>
  
    )
}
export default connect((store)=>{ return store})(Counter)
