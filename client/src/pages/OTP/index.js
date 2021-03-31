import React, {useEffect, useState} from 'react';
import OTPInput, { ResendOTP } from 'otp-input-react';
import {useSelector,useDispatch} from 'react-redux'
import { Link, Redirect } from 'react-router-dom';
import {sendOtp} from '../../redux/actions/otp.js'
import {makeTransaction} from '../../redux/actions/transaction.js'
const renderButton = buttonProps => {
    return (
      <button {...buttonProps} className="btn btn-danger m-1">
        {buttonProps.remainingTime !== 0
          ? `Chờ ${buttonProps.remainingTime}s`
          : "Gửi lại OTP"}
      </button>
    );
  };
  const renderTime = () => React.Fragment;
const OTP = (props) =>{
    const [otp, setOTP] = useState("")
    const dispatch = useDispatch()
    const handleClick = (e) =>{
        dispatch(sendOtp())
    }
    const isSuccess = useSelector(state => state.transactions?.isSuccess)
    const message = useSelector(state => state.transactions?.message)
    const requesting = useSelector(state => state.transactions?.requesting)
    const conFirm = (e)=>{
        dispatch(makeTransaction(otp))
        setIsClick(true)
    }
    var block = true
    var hidden = true
    const blockRedicrect = () =>{
        if(isSuccess == false && requesting == false && isClick){
            block = false
            hidden = false
            if(otp.length < 6){
                hidden = true
                setIsClick(false)
            }
            return false
        }
        return true
    }
    const [isClick,setIsClick] = useState(false)
    const checkEndRequest = ()=>{
        if(requesting == false && message && isClick){
            return true
        }
        return false
    }
    const checkOTP = ()=>{
        if(otp.length < 6){
            return true
        }
        return false
    }
    return(
        <>
        {blockRedicrect() && checkEndRequest() && <Redirect to="/transaction"/>}
        <div>
           <div className="container my-3">
                <div className="row justify-content-center">
                    <div className="background col-xl-5 border mt-3 pt-3 rounded mx-3">
                        <div className="form-group" style={{textAlign:"center"}}>
                            <h4>Xác nhận OTP</h4>
                            <div>
                            <OTPInput
                                value={otp}
                                onChange={setOTP}
                                autoFocus
                                OTPLength={6}
                                otpType="number"
                                disabled={false}
                                style={{justifyContent:"center",marginBottom:"5px",fontSize:"24px"}}
                                inputStyles={{width:"52px",height:"52px",fontWeight:"600"}}
                                secure
                            />
                            </div>
                            <div className="alert alert-danger" hidden={hidden} style={{fontWeight:"bold"}}>{message}</div>
                            <div style={{display:'flex',justifyContent:"center"}}>
                            <Link to="/transfer"><button className="btn btn-dark m-1" with>Quay lại</button></Link>
                            <ResendOTP onResendClick={handleClick} renderButton={renderButton} renderTime={renderTime}
                                maxTime={60}
                            />
                            <button onClick={conFirm} className="btn btn-danger m-1" disabled={checkOTP()}>Xác nhận </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default OTP