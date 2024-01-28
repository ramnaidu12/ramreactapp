import logo from './logo.svg';
import './App.css';
import Counter from './counter';
import { Provider } from 'react-redux';
import Store from './store/store';
import Counter2 from './counter2';

function App() {
  return (
    <div className='container d-flex  '>
    
      <Provider store={Store}>
        <div className='m-5  border secondary p-5 '>
      <Counter></Counter>
      </div>
      <div className='m-5 border secondary p-5'>
      <Counter2></Counter2>
      </div>

     </Provider>
    </div>
  );
}

export default App;
