import React from "react";
import Table from "./table";
function Tab(){

    return(<div>
        <table>
            <tr>
                <thead>First Name</thead>
                <thead>Last Name</thead>
                <thead>Age</thead>
                <thead>city</thead>
            </tr>
            <tr>
            <td>{fn}</td>
            <td>{ln}</td>
            <td>{age}</td>
            <td>{city}</td>
            </tr>
        </table>
    </div>
   

    )
}
export default Tab