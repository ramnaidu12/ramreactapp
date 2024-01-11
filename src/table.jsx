import React from "react";
import Tab from "./tab";
function Table(){
// var [people,setpeople]=React.useState([])
var[fn,setfn]=React.useState();
var[ln,setln]=React.useState();
var[age,setage]=React.useState();
var[city,setcity]=React.useState();


    return (<div>
<div>
<input type="text" onKeyUp={(e)=>{setfn(e.target.value)}}/>First Name
</div>
<div>
<input type="text" onKeyUp={(e)=>{setln(e.target.value)}}/>last Name
</div>
<div>
<input type="text"  onKeyUp={(e)=>{setage(e.target.value)}}/>Age
</div>
<div>
<input type="text"  onKeyUp={(e)=>{setcity(e.target.value)}}/>City
</div>
<div>
<input type="text"  onKeyUp={(e)=>{setcity(e.target.value)}}/>City
</div>
<Tab></Tab>


</div>
    )
}
export default Table