import React, { useState } from 'react';
import './index.css';

function App() {

  return (
    <>
      
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
              González
            </div>
          </div>
          <div className="charge">Front end / ui developer</div>
          <nav>
            <button >Work</button>
            <button >Skills</button>
            <button>About me</button>
            <button>Contact</button>
          </nav>
        </div>
      </div>
      
    </>
  );
}

export default App;
