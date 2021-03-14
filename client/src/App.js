import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react'
import {Provider, useDispatch, useSelector} from 'react-redux';
import configureStore from './redux/store'
import Router from './Router';
import Header from './pages/Home/components/Header.js'
import Transaction from "./pages/Transaction/index.js"
import {makeTransaction} from './redux/actions/transaction.js'
import {fetchDebtByStudentId} from './redux/actions/debt.js'
import {fetchUser} from './redux/actions/user.js'
import TransactionConstants from './redux/constants/transaction';
const store = configureStore()

function Demo(){
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchUser())
  },[])
  return (
    <> 
      <Header/>
      <Transaction/>
    </>
  )
}

function App() {
  
  return (
    <div>
      <Provider store ={store}>
        <Demo></Demo>
      </Provider>
    </div>
  );
}

export default App;
