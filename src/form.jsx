import React from "react";

function Form(){
var fnRef=React.useRef('');
var dtRef=React.useRef('')


function enter(){
    var kb={
        cardnumber:fnRef.current.value,
        expdat:dtRef.current.value
    }
    console.log(kb)
}
function kpres(x){
 
if(x.key==="Enter"){
    dtRef.current.focus()
}
}

    return (<div>
        <div>
        <input type="taxt" ref={fnRef} onKeyUp={(e)=>{kpres(e)}}/>:Card Number
      
        <input type="taxt" ref={dtRef}/>:Expiry Date

    </div>
    <button onClick={enter}>Submit</button>
    </div>
    )
}
export default Form