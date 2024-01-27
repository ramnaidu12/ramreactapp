
import './App.css';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import Arjentina from './arjentina';
import store from './store/store';
function App() {
  return (<Provider store={store} >
    <Arjentina> </Arjentina>
    </Provider>
  );
}

export default App;
