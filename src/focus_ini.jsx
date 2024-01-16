import React from "react";

function Focus(){

    var fn=React.useRef()
 React.useEffect(()=>{
    fn.current.focus()
    console.log("welcome")
 },[])

    return(<div>
        <div>
<label>First Name</label>
<input type="text" ref={fn} />

        </div>
         <div>
         <label>last Name</label>
         <input type="text"/>
         
                 </div>
                 </div>
    )
}
export default Focus