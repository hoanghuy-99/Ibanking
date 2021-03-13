import React, {useState} from 'react';
import OTPInput, { ResendOTP } from "otp-input-react";
const OTP = (props) =>{
    const [otp, setOTP] = useState("")  
    return(
        <div>
           <div className="container my-3">
                <div className="row justify-content-center">
                    <div className="col-xl-5 border mt-3 pt-3 rounded mx-3">
                        <div className="form-group" style={{textAlign:"center", justifyContent:"center"}}>
                            <h4>Xác nhận OTP</h4>
                            <div>
                            <OTPInput
                                value={otp}
                                onChange={setOTP}
                                autoFocus
                                OTPLength={6}
                                otpType="number"
                                disabled={false}
                                secure
                            />
                            </div>
                            <button className="btn btn-dark m-1" with>Quay lại</button>
                            <button className="btn btn-danger m-1">Gửi lại</button>
                            <button className="btn btn-danger m-1">Xác nhận </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OTP