import './App.css';
import {Provider} from 'react-redux';
import configureStore from './redux/store'
import Router from './Router';
const store = configureStore()
function App() {
  
  return (
    <div>
      <Provider store ={store}>
        <Router/>
      </Provider>
    </div>
  );
}

export default App;
