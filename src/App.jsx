import React, { useState } from 'react';
import { useModal, ModalProvider } from './context/modalContext.jsx'; // Importar el contexto
import Work from "./components/Work.jsx";
import Skills from "./components/Skills.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import './index.css';

function App() {
  const [modalValue, setModalValue] = useState('');

  const modalHandler = (modalName) => {
    setModalValue(modalName);
  };

  const renderModal = () => {
    switch (modalValue) {
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
  };

  return (
    <>
      <ModalProvider>
      <div className="mainHero">
        <div className="folio">Folio 2024</div>
        <div className="lang">Esp</div>
        <div className="inner">
          <div className="name">
            <span className="main-name">
              <span className='char char1'>A</span>
              <span className='char char2'>n</span>
              <span className='char char3'>d</span>
              <span className='char char4'>r</span>
              <span className='char char5'>é</span>
              <span className='char char6'>s</span>
            </span>
            <div className='last-name'>
              Gonzalez
            </div>
          </div>
          <div className="charge">Front end / ui developer</div>
          <nav>
            <button onClick={() => modalHandler('work')}>Work</button>
            <button onClick={() => modalHandler('skills')}>Skills</button>
            <button onClick={() => modalHandler('about')}>About me</button>
            <button onClick={() => modalHandler('contact')}>Contact</button>
          </nav>
        </div>
      </div>
      {renderModal()}
      </ModalProvider>
    </>
  );
}

export default App;
