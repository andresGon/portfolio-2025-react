import React, { useState } from 'react';
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
      <div className="mainHero">
        <div className="folio">Folio 2024</div>
        <div className="lang">Esp</div>
        <div className="inner">
          <div className="name">
            <span className="main-name">Andrés</span>
            <span> González</span>
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
    </>
  );
}

export default App;
