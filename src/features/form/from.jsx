import React, { useEffect } from "react";
import axios from "axios";
function Posts(){
    useEffect(()=>{
        axios.get('http://localhost:4000/posts').then((res)=>{console.log(res.data)})
    })
    return(
        <div>
            <h1>Posts</h1>
        </div>
    )
}

export default Posts