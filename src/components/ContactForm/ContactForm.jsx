import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import css from '../ContactForm/ContactForm.module.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input className={css.field} type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input className={css.field} type="text" value={number} onChange={(e) => setNumber(e.target.value)} placeholder="Number" />
      <button className={css.submitBtn} type="submit">Add Contact</button>
    </form>
  );
}
