import React, { useContext } from 'react';
import { modalContext } from '../context/modalContext';
import Work from './Work';
import Skills from './Skills';
import About from './About';
import Contact from './Contact';
import iconClose from '../assets/close.svg';

const ContentWrap = () =>{
    const { modalStatus, closeModal, modalContent } = useContext(modalContext)
    const handleClose = () =>{
        const modalWrap = document.querySelector('.modal-wrap')
        modalWrap.classList.add('slideOutDown')
        setTimeout(() => {
            closeModal()
        }, 450);
    }

    const components = {
      work: Work,
      skills: Skills,
      about: About,
      contact: Contact,
    };
    
    const renderModal = () => {
      const Component = components[modalContent];
      return Component ? <Component /> : null;
    };
    
    return(
        <>
        {modalStatus && (
            <>
                <div className="modal-wrap slideInUp">
                    <div className="modal-inner">
                        <button className='modal-close' onClick={()=>handleClose()}>
                            <img src={iconClose} alt="" />
                        </button>
                        {renderModal()}
                    </div>
                </div>
                
            </>
            
        )}
        </>
    )
}

export default ContentWrap