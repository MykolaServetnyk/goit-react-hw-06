// App.js
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, filterContacts } from '../../redux/store';

export default function App() {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts || []);
  const filter = useSelector(state => state.filter || '');

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleAddContact = (newContact) => {
    dispatch(addContact(newContact));
  };

  const handleFilterChange = (value) => {
    dispatch(filterContacts(value));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={handleAddContact} />
      <SearchBox value={filter} onFilter={handleFilterChange} />
      <ContactList />
    </div>
  );
}
