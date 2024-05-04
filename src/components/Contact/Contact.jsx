// Contact.js
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/store";
import css from './Contact.module.css';

export default function Contact({ contact }) {
  const { id, name, number } = contact;
  const dispatch = useDispatch();

  const handleDeleteContact = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={css.listItem}>
      <div className={css.contactInfo}>
        <p className={css.contactItem}><FaUser /> {name}</p>
        <p className={css.contactItem}><FaPhoneAlt /> {number}</p>
      </div>
      <button className={css.deleteBtn} type="button" onClick={handleDeleteContact}>Delete</button>
    </li>
  );
}
