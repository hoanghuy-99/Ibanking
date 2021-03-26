import React, { useState, useEffect } from 'react'; 
import { Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../redux/actions/user'
import { alertActions } from '../../redux/actions/alert'
function Login(){
    const checkLogin = useSelector(state => state.user?.loggedIn)
    const spinner  = useSelector(state => state.user?.requesting)
    const alert = useSelector(state => state.alert?.message)
    const [inputs, setInputs] = useState({
        username: '',
        password: ''
    })
    const [submitted, setSubmitted] = useState(false)
    const { username, password } = inputs
    const dispatch = useDispatch()
    
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
            dispatch(login(username, password))
        }
    }

    useEffect(() => {
        dispatch(alertActions.clear());
    }, []);

    return (
        <>
        { checkLogin && <Redirect to='/home'/>}
        <div className="container" style={{ margin: "5% 13%" }}>
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
                {submitted && alert &&
                    <div className="alert alert-danger">{alert}</div>
                }
                <div className="form-group">
                    <button onClick={handleSubmit} className="btn btn-primary">
                        {spinner && <span className="spinner-border spinner-border-sm mr-1"></span>}
                        Login
                    </button>
                </div>
            </form>
        </div>
        </>
    )
}

export default Login