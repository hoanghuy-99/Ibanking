import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './pages/Header/Header.js'
import Transaction from "./pages/Transaction/index.js"
import Home from "./pages/Home/index.js"
import Login from "./pages/Login/index.js"
import History from "./pages/History/index.js"
import OTP from "./pages/OTP/index.js"

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
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
                <Route path="/">
                    <Login/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router