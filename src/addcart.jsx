import { connect } from "react-redux";
import React from "react";


function Addcart(props){
console.log("pro",props)
console.log("ppy",props.axi.obj)
    return (<div className="container">
{
    props.axi.obj.map(pros=><>
   { console.log("hii",pros.pro.id)}
   <div className="border w-50 p-5">
   <img className="m-2 " width="10%"src={pros.pro.image}/>
    <h1>${pros.pro.price}</h1>
    <h6>{pros.pro.title}</h6>
    <button className="btn btn-secondary" onClick={()=>{props.pro.dispatch({type:"check",payload:{pros} })}}>check out</button>
    </div>
    </>)
}

    </div>)
}

export default connect(store=>store) (Addcart)