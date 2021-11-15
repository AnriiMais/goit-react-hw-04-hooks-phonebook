import { useState, useEffect } from 'react';
import './App.scss';
import data from '../../data.json';
import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';

const App = () => {
  const [contacts, setContacts] = useState(data);
  const [filterContact, setFilterContact] = useState('');
  useEffect(() => {
    const localCache = JSON.parse(localStorage.getItem('contacts'));
    setContacts(localCache || data);
  }, []);
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const onInputChange = e => {
    const { value } = e.target;
    setFilterContact(value);
  };
  const addContacts = contact => {
    const inputName = contact.name;
    const inputNumber = contact.number;
    setContacts(prev => {
      if (
        prev.every(
          contact =>
            contact.name.toLowerCase() !== inputName.toLowerCase() &&
            inputNumber !== contact.number,
        )
      ) {
        return [contact, ...prev];
      } else
        alert(`${inputName} contact with the ${inputNumber} already exists!!!`);
      return prev;
    });
  };
  const deleteContact = selectId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== selectId),
    );
  };

  const filterNormalized = filterContact.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterNormalized),
  );
  return (
    <section className="App">
      <h1>Phonebook</h1>
      <ContactForm onSubmitForm={addContacts} />
      <h2 className="contacts">Contacts</h2>
      <Filter value={filterContact} filterQuery={onInputChange} />
      <ContactList
        queryList={filteredContacts}
        onDeleteContact={deleteContact}
      />
    </section>
  );
};

export default App;
