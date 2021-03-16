import React from 'react';
import {connect} from 'react-redux';
import { login } from '../../redux/actions/user'

class Login extends React.Component {
    state_username = {
        username = ''
    }

    state_password = {
        password = ''
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit = event =>{
        event.preventDefault()
        this.props.login(this.state_username, this.state_password)
    }

    render(){
        return (
            <div className="container">
                <center>
                    <h1>LOGIN</h1>
                </center>
                <form onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Username</label>
                        <input type="text" className="form-control" name="username" 
                        value={this.state.username} onChange={this.handleChange} placeholder="Username"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" name="password"
                        value={this.state.password} onChange={this.handleChange} placeholder="Password"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button> 
                    <br/>
                    <br/>
                </form>
        </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    login: userInfo => dispatch(login(userInfo))
})
  
export default connect(null, mapDispatchToProps)(Login);