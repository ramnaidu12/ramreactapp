import React from "react";
import { connect } from "react-redux";

function Counter3(props){
    console.log(props)
    return (
        <div className="border border-2 m-3 p-3 border-danger">
            <h1>Counter3:{props.count3.count}</h1>
            <button onClick={()=>{props.dispatch({type:"INCREMENT"})}}>increment</button>
            <button onClick={()=>{props.dispatch({type:"DECREMENT"})}}>decrement</button>
            <button onClick={()=>{props.dispatch({type:"RESET"})}}>reset</button>
            
            

        </div>
    )
}
export default connect((store)=>{return store})(Counter3)