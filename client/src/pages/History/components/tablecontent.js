import React, {useState,useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux'
import {fetchTransactions} from '../../../redux/actions/transaction'
const TableContent = (props) =>{
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchTransactions())
    },[])
    const formatDate = (date) =>{
        var year = date.getFullYear().toString();
        var month = (date.getMonth() + 101).toString().substring(1);
        var day = (date.getDate() + 100).toString().substring(1);
        return month + '/' + day + '/' + year;
    }
    function formatTime(date) {
        var hours = date.getHours().toString();
        var minutes = date.getMinutes().toString();
        var seconds = date.getSeconds().toString();
        return hours + ':' + minutes + ':' + seconds;
    }
    function printTime(timestamp){
        var date = new Date(timestamp)
        var dt = formatDate(date) + ' ' + formatTime(date);
        return dt
    }
    const transactions = useSelector(state => state.transactions?.history) || []
    return(
        <>
        {transactions.map((value,index)=>{
            return (
            <tr>
                <th scope="row">{index+1}</th>
                <td>{value.student.id}</td>
                <td>{value.student.name}</td>
                <td>{printTime(value.time)}</td>
                <td>{value.description}</td>
                <td style={{color: "red"}}>-{value.amount}VND</td>
            </tr>)
        })}
        </>
    )
}
export default TableContent