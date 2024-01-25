import React from "react";
import { connect } from "react-redux";

function Counter2(props){
    
    return(
        <div  className="border border-2 m-3 p-3 border-danger">
            
            <h1>Counter2:{props.count2.count}</h1>
            <button onClick={()=>{props.dispatch({type:'INCRE'})}}>Incre</button>
            <button onClick={()=>{props.dispatch({type:'DECRE'})}}>Decre</button>
            <button onClick={()=>{props.dispatch({type:'RES'})}}>Res</button>
        </div>
    )
}
export default connect((store)=>{return store}) (Counter2)