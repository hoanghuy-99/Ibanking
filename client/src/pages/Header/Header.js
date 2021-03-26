import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import { logout } from '../../redux/actions/user'

const Header = (props) => {
    const profile = useSelector(state => state.user?.profile)
    const dispatch = useDispatch()
    const handleClick = (event) => {
        dispatch(logout())
    }
    return ( 
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link to="/home"><a className="navbar-brand" href="#">iBanking</a></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="d-flex">
                            <div>You are logged in as {profile&&profile.name} 
                                <span>
                                    <Link onClick={handleClick}>Logout</Link>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Header