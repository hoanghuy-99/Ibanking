import React, { useEffect } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Header from './pages/Header/Header.js'
import Transaction from "./pages/Transaction/index.js"
import Home from "./pages/Home/index.js"
import Login from "./pages/Login/index.js"
import History from "./pages/History/index.js"
import OTP from "./pages/OTP/index.js"
import {checkLogin, fetchUser} from "./redux/actions/user"
import { useDispatch, useSelector } from 'react-redux'
import { getToken } from './cookie.js'

const Router = () => {
    
    const loggedIn = useSelector(state => state.user.loggedIn)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(checkLogin())
    }, [getToken()])

    useEffect(()=>{
        if(loggedIn){
            dispatch(fetchUser())
        }
    }, [loggedIn])


    return (
        <BrowserRouter>
            {!getToken() && <Redirect to="/login"/>}
            <Switch>
                <Route path="/login">
                    <Login/>
                </Route>
                <Route path="/transfer">
                    <Header/>
                    <Transaction/>
                </Route>
                <Route path="/otp">
                    <Header/>
                    <OTP/>
                </Route>
                <Route path="/transaction">
                    <Header/>
                    <History/>
                </Route>
                <Route path="/home">
                    <Header/>
                    <Home/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router