import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import Notification from './Notification';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [notification, setNotification] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setNotification({ message: 'Todos los campos son obligatorios.', type: 'error' });
      return;
    }

    setIsLoading(true);

    emailjs
      .send(
        'service_qqg06da',
        'template_oygel5b',
        formData,
        'UPN-rc00tpiMtF0s2'
      )
      .then(
        (response) => {
          setNotification({ message: 'Correo enviado exitosamente.', type: 'success' });
          setIsLoading(false);
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          setNotification({ message: 'Error al enviar el correo. Inténtalo de nuevo.', type: 'error' });
          setIsLoading(false);
        }
      );
  };

  const handleCloseNotification = () => {
    setNotification(null);
  };

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 5000); // 5 segundos

      return () => clearTimeout(timer);
    }
  }, [notification]);

  return (
    <div>
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={handleCloseNotification}
        />
      )}

      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Correo:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Mensaje:
          <textarea name="message" value={formData.message} onChange={handleChange} required />
        </label>
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Enviando...' : 'Enviar'}
        </button>
      </form>
    </div>
  );
};

export default Contact;
