import React from "react";
import { connect } from "react-redux";

function Counter2(props){
    
    return(<>
        <div className=" border secondary p-5">
           <h2>Brazil Scored:{props.count2.count}</h2>
          <h1> Score:{props.count2.count}</h1>
          
            <button  onClick={(e)=>{props.dispatch({type:'Barcelona'})}}>Barcelona</button>
            <button  onClick={(e)=>{props.dispatch({type:'Xavi'})}}>Xavi</button>
            <button  onClick={(e)=>{props.dispatch({type:'Robin'})}}>Robin</button>
            <button  onClick={(e)=>{props.dispatch({type:'Andrea'})}}>Andrea</button>
            <button  onClick={(e)=>{props.dispatch({type:'Neymer'})}}>Neymer</button>
            <button  onClick={(e)=>{props.dispatch({type:'Messi'})}}>Messi</button>
            <button  onClick={(e)=>{props.dispatch({type:'vilan'})}}>vilan</button>
            <button  onClick={(e)=>{props.dispatch({type:'vincent'})}}>vincent</button>

          
            
          
        </div>
        <h3>{props.count2.istouch}</h3>
        </>
    )
}
export default connect((store)=>{return store}) (Counter2)