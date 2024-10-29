import React, { useContext } from 'react';
import { modalContext } from '../context/modalContext';

const Nav = () =>{
    const { modalStatus, openModal } = useContext(modalContext)
 return(
    <nav>
        <button onClick={()=>openModal()}>Work</button>
        <button >Skills</button>
        <button>About me</button>
        <button>Contact</button>
    </nav>
 )   
}

export default Nav