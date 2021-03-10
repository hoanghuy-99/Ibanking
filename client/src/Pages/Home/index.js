import React, {useState} from 'react';
const Home = (props) =>{
    return(
        <div>
            <div>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-6">
                            <div class="card" style={{width:"18rem"}}>
                                <img src="transfer.jpeg" class="card-img-top"/>
                                <div class="card-body">
                                <h5 class="card-title">Transfer</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="card" style={{width:"18rem"}}>
                                <img src="transfer.jpeg" class="card-img-top"/>
                                <div class="card-body">
                                    <h5 class="card-title">Transaction History</h5>
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