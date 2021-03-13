import React, {useState} from 'react';
const Home = (props) =>{
    return(
        <div>
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-6">
                            <div className="card" style={{width:"18rem"}}>
                                <img src="transfer.jpeg" class="card-img-top"/>
                                <div className="card-body">
                                <h5 className="card-title">Transfer</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="card" style={{width:"18rem"}}>
                                <img src="transfer.jpeg" class="card-img-top"/>
                                <div className="card-body">
                                    <h5 className="card-title">Transaction History</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home