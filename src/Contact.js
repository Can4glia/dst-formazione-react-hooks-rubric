import React from 'react';

const Contact = (contact) => {

  const firstName = contact.firstName;
  const lastName = contact.lastName;
  const email = contact.email;

  return (
    <li
      className='contact'
    >
      <span>{firstName}</span> <br/>
      <span>{lastName}</span> <br/>
      <span>{email}</span>
      <button 
        onClick={() => contact.delete()}
        className='del-btn'
      >X</button>
    </li>
  );
};

export default Contact;