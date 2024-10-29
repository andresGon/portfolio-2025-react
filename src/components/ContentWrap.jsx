import React, { useContext } from 'react';
import { modalContext } from '../context/modalContext';
import Work from './Work';
import Skills from './Skills';
import About from './About';
import Contact from './Contact';

const ContentWrap = () =>{
    const { modalStatus, closeModal, modalContent } = useContext(modalContext)
    const handleClose = () =>{
        closeModal()
    }

    const renderModal = () => {
        switch (modalContent) {
          case 'work':
            return <Work />;
          case 'skills':
            return <Skills />;
          case 'about':
            return <About />;
          case 'contact':
            return <Contact />;
          default:
            return null;
        }
    }
    return(
        <>
        {modalStatus && (
            <>
                <p>wrap content</p>
                {renderModal()}
                <button onClick={()=>handleClose()}>cerrar</button>
            </>
            
        )}
        </>
    )
}

export default ContentWrap