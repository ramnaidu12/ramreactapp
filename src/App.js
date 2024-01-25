import logo from './logo.svg';
import './App.css';
import Counter from './counter';
import { Provider } from 'react-redux';
import Store from './store/store';
import Counter2 from './counter2';
import Counter3 from './counter3';
function App() {
  return (
    <div className="border border-2 m-3 p-3 border-danger">
      <h1>App</h1>
      <Provider store={Store}>
      <Counter></Counter>
      <Counter2></Counter2>
      <Counter3></Counter3>
      </Provider>
    </div>
  );
}

export default App;
