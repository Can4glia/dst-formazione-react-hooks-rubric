import React, { useState, useEffect } from 'react';

const ContactForm = (props) => {

  // const [id, setId] = useState(1);

  const [contact, setContact] = useState(
    {
      id: null,
      firstName: '',
      lastName: '',
      email: ''
    }
  );
  
  const handleChange = event => {
    event.preventDefault();
    
    setContact({
      ...contact,
      [event.target.name]: event.target.value,
    });
  }

  return (

    <div 
      className='form-group'
    >
      <input placeholder='nome' name='firstName' value={contact.firstName} onChange={handleChange} />
      <input placeholder='cognome' name='lastName' value={contact.lastName} onChange={handleChange} />
      <input placeholder='email' name='email' value={contact.email} onChange={handleChange} />
      <button 
        onClick={() => props.add(contact)}
        className='add-btn'  
      > add </button>
    </div>
  );
};

export default ContactForm;