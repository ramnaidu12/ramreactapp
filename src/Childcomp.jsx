import React from "react";
import { useParams } from "react-router-dom";

function Childcomp(){
    let [std,setStd] = React.useState(null)

    const params = useParams()
    
    React.useEffect(()=>{
    
        setStd({...JSON.parse(params.cname)})
        
    },[])

    return(
        std && <div className="border text-center  m-5 w-50 bg-light">
                    <h1>Name: {std.firstname +' '+ std.lastname }</h1>
                    <h1>Age: {std.age}</h1>
                    <button className="btn btn-secondary">click here</button>
              </div>
    )
}
export default Childcomp