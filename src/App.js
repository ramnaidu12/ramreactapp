
import { Provider } from 'react-redux';
import store from './store/store';

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
