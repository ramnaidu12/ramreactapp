

import React from "react";
import { connect } from "react-redux";
function Todolist(props){
   console.log(props)

   let [val,setval]=React.useState('')
   let emp=React.useRef('')
   function add(){
  
        props.task(val)
        emp.current.value=''
    
   }
  
   
  console.log(val)
return (<>
<input type="text" ref={emp} onChange={(e)=>{setval(e.target.value)}}></input>
<button onClick={()=>{add()}}>add item</button>

<ul>
    {
        props.todos.map((tt,ind)=><li>{tt}<button  className="btn btn-secondary btn-sm m-2" onClick={()=>{props.del(ind)}}>delete</button></li>)
    }
</ul>
</>
)


}
function mapStateToProps(state){
    return state.todo
   }
   function mapdispatchToProps(dispatch){
        
       return {
   task:(val)=>{dispatch({type:'addtodo',payload:val})},
  del:(ind)=>{dispatch({type:'del',index:ind})
    }
   }
}

export default connect(mapStateToProps,mapdispatchToProps)(Todolist)