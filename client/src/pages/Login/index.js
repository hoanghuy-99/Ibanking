import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const Login = (props) =>{
    return(
        <div class="container">
            <center>
                <h1>LOGIN</h1>
            </center>
            <form>
                <div class="mb-3">
                    <label class="form-label">Email address</label>
                    <input type="email" class="form-control" name="email" aria-describedby="emailHelp" placeholder="Email"/>
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label class="form-label">Password</label>
                    <input type="password" class="form-control" name="password" placeholder="Password"/>
                </div>
                <div class="alert alert-danger" role="alert"></div> 
            </form>
            <Link to="/home"><button type="submit" class="btn btn-primary">Login</button></Link>
        </div>
    )
}

export default Login