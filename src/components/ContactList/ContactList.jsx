// ContactList.js
import Contact from "../Contact/Contact";
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';

export default function ContactList() {
  const contacts = useSelector(state => state.contacts || []);
  const filter = useSelector(state => state.filter || '');

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.list}>
      {filteredContacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
}
