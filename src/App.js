import './App.css';
import React, { useState } from 'react';
import Header from "./Header";
import ContactForm from './ContactForm';
import Contact from './Contact';

function App() {
  
  const [rubric, setRubric] = useState([]);
  const [id, setId] = useState(1);

  const addContact = contact => {
    // console.log(contact);
    contact.id = id;
    let rubric_copy = rubric.slice();
    // console.log(contact);
    rubric_copy = [...rubric_copy, contact];
    setRubric(rubric_copy);
    setId(id + 1);
  }

  const contacts = rubric.map((contact, i) =>
    <Contact
      key={i}
      className='contact'
      firstName={contact.firstName}
      lastName={contact.lastName}
      email={contact.email}
      id={contact.id}
      delete={() => setRubric(rubric.filter(item => item.id !== contact.id))}
    />
  );

  return (
    <div className="App">
      <Header />
      <ContactForm
        add={addContact}
      />
      <ul>
        {contacts}
      </ul>
    </div>
  );
}

export default App;
