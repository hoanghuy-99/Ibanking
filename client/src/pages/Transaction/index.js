import React, {useState} from 'react';
const Transaction = (props) =>{
    return(
        <div>
            <div className="container my-3">
                <div className="row justify-content-center">
                    <div className="background col-xl-8 border mt-3 pt-3 rounded mx-3">
                        <form action="" method="POST">
                            <div>
                                <h4>Người nộp tiền</h4>
                                <div className="form-group">
                                    <label for="user">Họ tên</label>
                                    <input className="form-control" type="text"  id="name" name="name" disabled/>
                                </div>
                                <div className="form-group">
                                    <label for="std">Số điện thoại</label>
                                    <input className="form-control" type="text" id="sdt" name="sdt" disabled/>
                                </div>
                                <div className="form-group">
                                    <label for="email">Email</label>
                                    <input className="form-control" type="text" id="email" name="email" disabled/>
                                </div>
                            </div>
                            <div className="my-3">
                                <h4>Thông tin học phí</h4>
                                <div className="form-group">
                                    <label for="mssv">Mã số sinh viên</label>
                                    <input className="form-control" type="text"  placeholder="Nhập MSSV" id="mssv" name="mssv"/>
                                </div>
                                <div className="form-group">
                                    <label for="hoten">Họ và tên sinh viên</label>
                                    <input className="form-control" type="text"  id="name_sv" name="name_sv" disabled/>
                                </div>
                                <div className="form-group">
                                    <label for="user">Số tiền cần nộp</label>
                                    <input className="form-control" type="text" id="money" name="money" value="VND" disabled/>
                                </div>
                            </div>
                            <div className="my-3">
                                <h4>Thông tin thanh toán</h4>
                                <div className="form-group">
                                    <label for="sodu">Số dư tài khỏan</label>
                                    <input className="form-control" type="text"  id="sodu" name="sodu" disabled/>
                                </div>
                                <div className="form-group">
                                    <label for="tiennop">Số tiền cần nộp</label>
                                    <input className="form-control" type="text"  id="tiennop" name="tiennop" disabled/>
                                </div>
                                <div className="form-group">
                                    <label for="user">Thỏa thuận&Điều khoản</label>
                                    <textarea className="form-control" name="desciption" id="desciption" cols="30" rows="10" disabled></textarea>
                                </div>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-dark m-1" with>Hủy</button>
                                <button className="btn btn-danger m-1">Thanh toán</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Transaction