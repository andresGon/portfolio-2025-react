import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext'; 
import { useTranslation } from 'react-i18next'; // Importa el hook de traducción

const Header = () =>{
    const { t, i18n } = useTranslation();
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };
    const { theme, toggleTheme } = useContext(ThemeContext); // Asegúrate de que no sea undefined

    return(
        <div>
            <div className="folio">{t('folio')} 2024</div>
          <button className='theme-btn' onClick={toggleTheme}>
            {theme === 'light' ? 'Dark' : 'Light'}
            </button>
          <div className="lang" onClick={() => changeLanguage(i18n.language === 'es' ? 'en' : 'es')}>
            {i18n.language === 'es' ? 'Esp' : 'Eng'}
          </div>
        </div>
    )
}

export default Header;