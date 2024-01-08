import React from "react";


function Counter(){

    
        var [val,setval]=React.useState(0)
        
        function increment(){
            val++
          setval(val)
        }
        function decrement(){
        val--
        setval(val)
        }
            return(<div>
        <h1>{val}</h1>
        <button onClick={()=>{increment()}} >increment</button>
        <button onClick={()=>{decrement()}} >decrement</button>
        
        
            </div>)
        }

export default Counter








