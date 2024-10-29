import React, { createContext, useContext, useState } from 'react';

// Crear el contexto
const ModalContext = createContext();

// Hook personalizado para usar el contexto
export const useModal = () => useContext(ModalContext);

// Proveedor del contexto
export const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false); // Estado booleano de la modal

  // Función para abrir la modal con contenido
  const openModal = () => {
    setIsOpen(true);
  };

  // Función para cerrar la modal
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};
