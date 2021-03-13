import React, {useState} from 'react';
import TableContent from './tablecontent'

const TableHistory = (props) =>{
    return(
        <div>
            <table class="table table-dark table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Date</th>
                    <th scope="col">Remark</th>
                    <th scope="col">Amount</th>
                </tr>
            </thead>
            <tbody>
                <TableContent></TableContent>
            </tbody>
        </table>
        </div>
    )
}
export default TableHistory