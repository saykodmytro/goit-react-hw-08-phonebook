import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import css from './ContactList.module.css';

const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();
  return (
    <ul className={css.list}>
      {contacts.length > 0 &&
        contacts.map(({ _id, name, number }) => (
          <li key={_id} className={css.item}>
            <p className={css.descrList}>{name}</p>
            <p className={css.descrList}>{number}</p>
            <button
              type="button"
              className={css.btnDel}
              onClick={() => dispatch(deleteContact(_id))}
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
};

export default ContactList;
