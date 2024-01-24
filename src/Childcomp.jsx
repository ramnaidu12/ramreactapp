import React from "react";
import { useParams } from "react-router-dom";

function Childcomp(){
    let [std,setStd] = React.useState(null)

    const params = useParams()
    
    React.useEffect(()=>{
    
        setStd({...JSON.parse(params.cname)})
        
    },[])

    return(
        std && <div>
                    <h1>Name: {std.firstname +' '+ std.lastname }</h1>
                    <h1>Age: {std.age}</h1>
              </div>
    )
}
export default Childcomp