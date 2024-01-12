import React from "react";
import Tab from "./tab";
function Table(){
 var [people,setpeople]=React.useState([])
var[fn,setfn]=React.useState();
var[ln,setln]=React.useState();
var[age,setage]=React.useState();
var[city,setcity]=React.useState();
function save(){
var obj={
    firstname:fn,
    lastname:ln,
    age:age,
    city:city
}
setpeople([...people,obj])
setfn()
setln()
setage()
setcity()

}


 console.log(people)

    return (<div>
<div>
<input type="text" onChange={(e)=>{setfn(e.target.value)}} value={fn?fn:""}/>First Name
</div>
<div>
<input type="text" onChange={(e)=>{setln(e.target.value)}}  value={ln?ln:""}/>last Name
</div>
<div>
<input type="text"  onChange={(e)=>{setage(e.target.value)}}  value={age?age:""}/>Age
</div>
<div>
<input type="text"  onChange={(e)=>{setcity(e.target.value)}}  value={city?city:""}/>City
</div>
<button onClick={()=>save()}>save</button>

<table style={{border:"1px solid"}}>
            <thead>

            
            <tr>
                
                <th>First Name</th>
                <th>Last Name</th>
                <th>Age</th>
                <th>city</th>
                </tr>
            


            </thead>
            <tbody>
                {people.map((people)=>{
                  return  <Tab people= {people}></Tab>
                })}
            </tbody>

</table>
</div>
    )
}
export default Table