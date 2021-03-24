import React, {useState} from 'react';
import TableContent from './tablecontent'

const TableHistory = (props) =>{
    return(
        <div>
            <table class="table table-striped" style={{backgroundColor:"white"}}>
            <thead>
                <tr>
                    <th scope="col">STT</th>
                    <th scope="col">MSSV</th>
                    <th scope="col">Họ tên</th>
                    <th scope="col">Date</th>
                    <th scope="col">Description</th>
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