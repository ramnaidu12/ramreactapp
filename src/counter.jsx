import React from "react"
import{connect} from "react-redux"
function Counter(props){
console.log(props)
    return(
        <>
 <div className=" border secondary p-5" >

 <h2> Arjentina scored :{props.count.count}</h2>
 
 <h2>  scored :{props.count.count}</h2>
 
   

   <button   onClick={(e)=>{props.dispatch({type:"ron"  })}}> Ronaldo</button>
   <button  onClick={(e)=>{props.dispatch({type:"pepe"  })}}> Pepe</button>
   <button  onClick={(e)=>{props.dispatch({type:"Marcelo"  })}}>Marcelo </button>
   <button  onClick={(e)=>{props.dispatch({type:"Modric"  })}}> Modric</button>
   <button  onClick={(e)=>{props.dispatch({type:"Benzema"  })}}> Benzema</button>
   <button  onClick={(e)=>{props.dispatch({type:"Rooney"  })}}> Rooney</button>
   <button  onClick={(e)=>{props.dispatch({type:"Ram"  })}}> ram</button>
   <button  onClick={(e)=>{props.dispatch({type:"Jasim"  })}}> Jasim</button>
  
 
   
       
</div>
<h3>{props.count.istouch} </h3>
</>
    )

}
export default connect((store)=>{ return store})(Counter )
