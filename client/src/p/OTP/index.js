import React, {useState} from 'react';
const OTP = (props) =>{
    return(
        <div>
           <div class="container my-3">
                <div class="row justify-content-center">
                    <div class="col-xl-5 border mt-3 pt-3 rounded mx-3">
                        <div class="form-group" style={{textAlign:"center"}}>
                            <button class="btn btn-dark mr-2" with>Quay lại</button>
                            <button class="btn btn-danger mr-2">Gửi lại</button>
                            <button class="btn btn-danger mr-2">Xác nhận </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OTP