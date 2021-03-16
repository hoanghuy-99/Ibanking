import Modal from 'react-modal';
import React, {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    borderRadius          : '10px',
  }
};

function ModalMessage({isOpen}){
  var subtitle;
  const [modalIsOpen,setIsOpen] = React.useState(false);
  
  useEffect(()=>{
    setIsOpen(isOpen)
  }, [isOpen])
 
  function closeModal(){
    setIsOpen(false);
  }
  return (
    <div>
      
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >

        <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <Link to="/otp"><button>Xác nhận</button></Link>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
        </Modal>
    </div>
  );
}
export default ModalMessage