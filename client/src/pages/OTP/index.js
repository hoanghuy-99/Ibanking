import React, {useState} from 'react';
import OTPInput, { ResendOTP } from 'otp-input-react';
import {useSelector,useDispatch} from 'react-redux'
import { Link } from 'react-router-dom';
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
    const conFirm = (e)=>{
        console.log(otp)
        dispatch(makeTransaction(otp))
    }
    return(
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
                            <div style={{display:'flex',justifyContent:"center"}}>
                            <Link to="/transfer"><button className="btn btn-dark m-1" with>Quay lại</button></Link>
                            <ResendOTP onResendClick={handleClick} renderButton={renderButton} renderTime={renderTime}
                                maxTime={10}
                            />
                            <Link to="/transaction" onClick={conFirm}><button className="btn btn-danger m-1">Xác nhận </button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OTP