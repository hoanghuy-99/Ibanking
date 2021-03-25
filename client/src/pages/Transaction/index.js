import React, {useState,useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux'
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import {fetchDebtByStudentId} from '../../redux/actions/debt.js'
import {sendOtp} from '../../redux/actions/otp.js'

const Transaction = (props) =>{
    const profile = useSelector(state => state.user?.profile)
    const debt = useSelector(state => state.debt?.data)
    const dispatch = useDispatch()
    const [id,setId] = useState("") 
    const checkStudentId = ()=>{
        if(id.length != 8 ){
            return ""
        }
        return true
    }
    const handleChange = (e)=>{
        const student_id = e.target.value
        if(student_id.length == 8){
            dispatch(fetchDebtByStudentId(student_id))
        }
        setId(student_id)
    }
    const handleClick = (e)=>{
        dispatch(sendOtp())
    }
    const [disable,setDisable] = useState("")
    const [msg,setMsg] = useState("")
    const [boo,setBoo] = useState(true)
    const checkSodu=()=>{
        if(profile?.balance !=0 && debt?.amount !=0 && profile?.balance && debt?.amount){
            if(profile?.balance < debt?.amount ){
                setMsg("Số dư không đủ để thực hiện giao dịch")
                setDisable("disabled-link")
                setBoo(true)
            }
            else
            {
                setBoo(false)
                setMsg( profile?.balance - debt?.amount)
            }
            
        }
    }
    const customStyles = {
        content : {
          width                 : '50%',
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)',
          borderRadius          : '10px',
        }
      };
    const [modalIsOpen,setIsOpen] = useState(false)
    function closeModal(){
        setIsOpen(false);
    }
    function OpenModal(){
        setIsOpen(true)
        checkSodu()
    }
    return(
        <div>
            <div className="container my-3">
                <div className="row justify-content-center">
                    <div className="background col-xl-8 border mt-3 pt-3 rounded mx-3">
                        <form >
                            <div>
                                <h4>Người nộp tiền</h4>
                                <div className="form-group">
                                    <label for="user">Họ tên</label>
                                    <input className="form-control" type="text"  id="name" name="name" value={profile&&profile.name} disabled/>
                                </div>
                                <div className="form-group">
                                    <label for="std">Số điện thoại</label>
                                    <input className="form-control" type="text" id="sdt" name="sdt" value={profile&&profile.phone} disabled/>
                                </div>
                                <div className="form-group">
                                    <label for="email">Email</label>
                                    <input className="form-control" type="text" id="email" name="email" value={profile&&profile.emailAddress} disabled/>
                                </div>
                            </div>
                            <div className="my-3">
                                <h4>Thông tin học phí</h4>
                                <div className="form-group">
                                    <label for="mssv">Mã số sinh viên</label>
                                    <input className="form-control" type="text"  placeholder="Nhập MSSV" id="mssv"  onChange={handleChange}/>
                                </div>
                                <div className="form-group">
                                    <label for="noidung">Nội dung học phí</label>
                                    <input className="form-control" type="text"  id="noidung"  value={checkStudentId()&&debt&&debt.description} disabled/>
                                </div>
                                <div className="form-group">
                                    <label for="hoten">Họ và tên sinh viên</label>
                                    <input className="form-control" type="text"  id="name_sv"  value={checkStudentId()&&debt&&debt.student.name} disabled/>
                                </div>
                                <div className="form-group">
                                    <label for="user">Số tiền cần nộp</label>
                                    <input className="form-control" type="text" id="money" value="VND" value={checkStudentId()&&debt&&debt.amount} disabled/>
                                </div>
                            </div>
                            <div className="my-3">
                                <h4>Thông tin thanh toán</h4>
                                <div className="form-group">
                                    <label for="sodu">Số dư tài khỏan</label>
                                    <input className="form-control" type="text"  id="sodu" value={profile&&profile.balance} disabled/>
                                </div>
                                <div className="form-group">
                                    <label for="tiennop">Số tiền cần nộp</label>
                                    <input className="form-control" type="text"  id="tiennop"  value={checkStudentId()&&debt&&debt.amount} disabled/>
                                </div>
                                <div className="form-group">
                                    <label for="user">Thỏa thuận&Điều khoản</label>
                                    <textarea className="form-control"  id="desciption" cols="30" rows="10" disabled>
                                       {`- Điều 1: Phải thực hiện đúng hạn thanh toán học phí.\n- Điều 2: Không chịu trách nhiệm cho việc thanh toán nhầm cho sinh viên khác, nên kiểm tra kỹ trước khi giao dịch.\n- Điều 3: Không để người khác biết mã giao dịch của bạn!`}
                                    </textarea>
                                </div>
                            </div>
                        </form>
                        <div className="form-group">
                                <Link to="/home"><button className="btn btn-dark m-1" with>Hủy</button></Link>
                                <button onClick={OpenModal} className="btn btn-danger m-1" disabled={!checkStudentId()}>Thanh toán</button>
                        </div>
                        <div>
                            <Modal
                                isOpen={modalIsOpen}
                                onRequestClose={closeModal}
                                style={customStyles}
                                contentLabel="Example Modal"
                            >

                                <h2>Xác nhận thông tin chuyển khoản</h2>
                                <div>MSSV: <strong>{checkStudentId()&&id}</strong></div>
                                <div>Họ và tên: <strong>{checkStudentId()&&debt&&debt.student.name}</strong></div>
                                <div>Nội dung: <strong>{checkStudentId()&&debt&&debt.description}</strong></div>
                                <div>Số dư tài khoản: <strong>{checkStudentId()&&profile&&profile.balance}</strong></div>
                                <div>Số tiền cần nộp: <strong style={{color:"red"}}>{checkStudentId()&&debt&&debt.amount}</strong></div>
                                <div>Số tiền còn trong tài khoản: <strong style={{color:"red"}}>{checkStudentId()&&msg}</strong></div>
                                <button className="btn btn-dark m-1" onClick={closeModal}>Hủy</button>
                                <Link to="/otp" className={disable} onClick={handleClick}><button className="btn btn-danger m-1" disabled={boo}>Xác nhận</button></Link>
                                </Modal>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Transaction