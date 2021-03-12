import logo from './logo.svg';
import './App.css';
import {Provider, useDispatch, useSelector} from 'react-redux';
import configureStore from './redux/store'
import Router from './Router';

import {fetchUser} from './redux/actions/user.js'
const store = configureStore()

function Demo(){
  const profile = useSelector(state => state.user.profile)
  const dispatch = useDispatch()

  const handleClick = (e) => {
    dispatch(fetchUser())
  }

  return (
    <>
      <div> {profile && profile.name} </div>
      <button onClick={handleClick} >Fetch</button>
    </>
  )
}

function App() {
  
  return (
    <div className='App'>
      <Provider store = {store}>
        <Demo></Demo>
      </Provider>
    </div>
  );
}

export default App;
