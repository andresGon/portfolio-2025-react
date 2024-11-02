import React, { useContext } from 'react';
import { modalContext } from '../context/modalContext';

const Nav = () =>{
    const { openModal } = useContext(modalContext)
    const handleModal=(content)=>{
        openModal(content)
    }
 return(
    <nav>
        <button onClick={()=>handleModal('work')}>Work</button>
        <button onClick={()=>handleModal('skills')}>Skills</button>
        <button onClick={()=>handleModal('about')}>About me</button>
        <button onClick={()=>handleModal('contact')}>Contact</button>
    </nav>
 )   
}

export default Nav