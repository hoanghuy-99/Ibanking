import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {incrementCount} from './redux/actions/count.js.js.js.js'

const Count = (props)=>{
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();
    const handleClick = (e) => {
        dispatch(incrementCount())
    }
    return (
        <div>
            <h3> Count Component </h3>
            <h5> Count: {count}</h5>
            <button onClick={handleClick}> Add 1</button>
        </div>
    )
}

export default Count 