import React, { useContext} from 'react';
import { modalContext } from '../context/modalContext';

const Modal = () => {
    const { modalStatus } = useContext(modalContext)
  const{closeModal,modalContent} = useContext(modalContext)
  if (!open) return null;

  const handleClose = ()=>{
    const modalWrap = document.querySelector('.modal')
    modalWrap.classList.add('slideOutDown')
    setTimeout(() => {
      closeModal()
    }, 450);
  }
  return (
    
    <div className="modal slideInUp">
        <div className="modal-inner">
            <div className='modal-btnBack' onClick={()=>{handleClose()}}>
              Cerrar
            </div>
            <p>esta es la modal</p>
        </div>
    </div>
  );
};

export default Modal;