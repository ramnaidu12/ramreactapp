import React from "react";
import { connect } from "react-redux";
function Counter(props){
console.log("counter")
    return( <>
    <h1>Counter value: {props.count}</h1>
    <button className="btn btn-secondary btn-sm m-2" onClick={()=>{props.incre()}}>Increment</button>
    <button className="btn btn-secondary btn-sm m-2" onClick={()=>{props.decre()}}>decrement</button>
    <button className="btn btn-secondary btn-sm m-2" onClick={()=>{props.reset()}}>reset</button>
    </>)
}
 function mapStateToProps(state){
 return state.count
}
function mapDispatchToProps(dispatch){
 return {
    incre:()=>dispatch({type:'inc'}),
    decre:()=>dispatch({type:'dec'}),
   reset:()=>dispatch({type:'reset'})
 }
}


export default connect(mapStateToProps,mapDispatchToProps)(Counter)