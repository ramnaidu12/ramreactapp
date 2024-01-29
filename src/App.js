
import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';
import Todolist from './todolist';
import Counter from './counter';
function App() {
  return (
    <div className='container'>
    <Provider store={store}>
      <div className='w-50 border m-auto'>
<Todolist></Todolist>
</div>
<div  className='w-50 border m-auto'>
<Counter></Counter>
</div>
    </Provider>
    </div>
  );
}

export default App;
