
import {useEffect,useState} from 'react'
import './App.css';
import axios from 'axios'

 

function App() {
 var [data,setData]=useState()

 


  useEffect (()=>{
    axios.get("https://fakestoreapi.com/products").then(function(res){
        // console.log(res.data)
          
        setData(res?.data);
      }
      
      )
      
  },[])


  return (
    <div className="App">
  {
     
data.map((fun)=>{
 return(<div >{fun.id}</div>)
})
  }
    </div>
  );
}

export default App;
