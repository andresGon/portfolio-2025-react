import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next'; // Importa el hook de traducción
import { modalContext } from '../context/modalContext';

const Nav = () => {
  const { t } = useTranslation();
  const { openModal } = useContext(modalContext);
  
  const handleModal = (content) => {
    openModal(content);
  };
  
  return (
    <nav>
      <button onClick={() => handleModal('work')}>{t('work')}</button>
      <button onClick={() => handleModal('skills')}>{t('skills')}</button>
      <button onClick={() => handleModal('about')}>{t('about_me')}</button>
      <button onClick={() => handleModal('contact')}>{t('contact')}</button>
    </nav>
  );
};

export default Nav;
