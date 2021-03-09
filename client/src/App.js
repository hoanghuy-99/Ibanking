import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';
//import configureStore from './redux/store'
import Router from './Router';

//const store = configureStore()

function App() {
  return (
      <Router />
  );
}

export default App;
