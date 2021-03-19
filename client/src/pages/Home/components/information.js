import React from 'react';
import { useSelector } from 'react-redux'

const Information = (props) =>{
    const profile = useSelector(state => state.user?.profile)
    return(
        <div className="container">
            <div className="card text-center">
                <div className="card-body">
                    <h5 className="card-title">User Information</h5>
                    <p className="card-text">Name: {profile&&profile.name}</p>
                    <p className="card-text">Phone: {profile&&profile.phone}</p>
                    <p className="card-text">Balances: {profile&&profile.balances}</p>
                </div>
            </div>
        </div>  
    )
}
export default Information