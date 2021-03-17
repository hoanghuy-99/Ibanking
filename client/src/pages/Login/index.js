import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout } from '../../redux/actions/user'

function Login(){
    const [inputs, setInputs] = useState({
        username = '',
        password = ''
    })
    const [submitted, setSubmitted] = useState(false)
    const { username, password } = inputs
    const loggingIn = useSelector(state => state.authentication.loggingIn)
    const dispatch = useDispatch()
    const location = useLocation()
    
    // reset
    useEffect(() =>{
        dispatch(logout())
    }, [])
    
    function handleChange(event) {
        const { name, value } = event.target
        setInputs(inputs => ({
            ...inputs,
            [name]: value
        }))
    }

    function handleSubmit(event) {
        event.preventDefault()
        setSubmitted(true)
        if(username && password) {
            const { from } = location.state || { from: { pathname: '/home' } }
            dispatch(login(username, password, from))
        }
    }

    return (
        <div className="container">
            <center>
                <h1>LOGIN</h1>
            </center>
            <form name="form" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input type="text" name="username" value={username} onChange={handleChange} className={'form-control' + (submitted && !username ? ' is-invalid' : '')} />
                    {submitted && !username &&
                        <div className="invalid-feedback">Username is required</div>
                    }
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" name="password" value={password} onChange={handleChange} className={'form-control' + (submitted && !password ? ' is-invalid' : '')} />
                    {submitted && !password &&
                        <div className="invalid-feedback">Password is required</div>
                    }
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">
                        {loggingIn && <span className="spinner-border spinner-border-sm mr-1"></span>}
                        Login
                    </button>
                </div>
            </form>
        </div>
    )
}

export { Login }