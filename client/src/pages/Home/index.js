import React from 'react';
import Header from '../../components/Header'
import Information from './components/information'
import { Link } from "react-router-dom";

const Home = (props) =>{
    return(
        <div>
            <Header></Header>
            <Information></Information>
            <div className="container" style={{marginTop:"100px",textAlign:"center"}}>
                <div className="row" style={{display:"inline-flex"}}>
                    <div className="col-6">
                        <Link to="/transfer">
                            <div className="card" style={{width:"18rem"}}>
                                <img src="transfer.jpeg" class="card-img-top"/>
                                <div className="card-body">
                                    <h5 className="card-title">Transfer</h5>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-6">
                        <Link to="/transaction">
                            <div className="card" style={{width:"18rem"}}>
                                <img src="transfer.jpeg" class="card-img-top"/>
                                <div className="card-body">
                                    <h5 className="card-title">Transaction History</h5>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>     
    )
}
export default Home