import React from "react";
import Todolist from "./todolist.jsx";
import { Provider } from "react-redux";
function App() {
  return (<>
   <Provider>
<Todolist></Todolist>
</Provider>
  </>
 
  );
}

export default App;
