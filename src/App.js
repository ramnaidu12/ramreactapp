
import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';
import Axi from './axe';
import Addcart from './addcart';
import { Outlet } from 'react-router';
function App() {
  return (
    <div>
      <Provider store={store}>
      <Outlet></Outlet>
      </Provider>
    
    </div>
  );
}

export default App;
