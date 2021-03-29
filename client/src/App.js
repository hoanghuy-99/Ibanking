import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react'
import {Provider, useDispatch, useSelector} from 'react-redux';
import configureStore from './redux/store'
import Router from './Router';
import {makeTransaction} from './redux/actions/transaction.js'
import {fetchDebtByStudentId} from './redux/actions/debt.js'
import TransactionConstants from './redux/constants/transaction';
import { getToken } from './cookie';
import { Redirect } from 'react-router';
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
