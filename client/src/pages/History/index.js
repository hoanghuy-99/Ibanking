import React, {useState} from 'react';
import TableHistory from './components/table'

const History = (props) =>{
    return(
        <div class="container">
            <center>
                <h1>Transaction History</h1>
            </center>
            <TableHistory></TableHistory>
        </div>
    )
}
export default History