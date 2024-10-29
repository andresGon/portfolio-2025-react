import React, { useContext } from 'react';
import { modalContext } from '../context/modalContext';

const ContentWrap = () =>{
    const { modalStatus, closeModal } = useContext(modalContext)
    const handleClose = () =>{
        closeModal()
    }
    return(
        <>
        {modalStatus && (
            <>
                <p>wrap content</p>
                <button onClick={()=>handleClose()}>cerrar</button>
            </>
            
        )}
        </>
    )
}

export default ContentWrap