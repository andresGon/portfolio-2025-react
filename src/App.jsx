import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import './i18n'; // Importa el archivo de configuración i18n
import StateApp from './context/stateApp.jsx';
import ContentWrap from './components/ContentWrap.jsx';
import Nav from './components/Nav.jsx';
import './index.scss';

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <StateApp>
        <div className="mainHero">
          <div className="folio">{t('folio')} 2024</div>
          <div className="lang" onClick={() => changeLanguage(i18n.language === 'es' ? 'en' : 'es')}>
            {i18n.language === 'es' ? 'Esp' : 'Eng'}
          </div>
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
            <div className="charge">{t('front_end_ui_developer')}</div>
            <Nav></Nav>
          </div>
        </div>
        <ContentWrap></ContentWrap>
      </StateApp>
    </>
  );
}

export default App;
