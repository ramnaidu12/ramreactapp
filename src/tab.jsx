import React from "react";

function Tab({people}){
    console.log(people,"p")

    return (<tr>
        <td>{people.firstname}</td>
        <td>{people.lastname}</td>
        <td>{people.age}</td>
        <td>{people.city}</td>
        </tr>
   
      
    )
}
export default Tab