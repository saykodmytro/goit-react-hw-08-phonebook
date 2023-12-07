import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts.selector';
import { addContact } from 'redux/operation';
import css from './PhoneForm.module.css';

const PhoneForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleAddContact = newContact => {
    const hasDuplicates = contacts.some(
      contact =>
        contact.name.toLowerCase() === newContact.name.toLowerCase() ||
        contact.phone === newContact.phone
    );

    if (hasDuplicates) {
      alert(`Oops, contact with name '${newContact.name}' already exists!`);
    } else {
      dispatch(addContact(newContact));
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    const newContact = {
      id: nanoid(),
      name: name,
      phone: phone,
    };

    handleAddContact(newContact);
    setName('');
    setPhone('');
  };

  const handleChange = e => {
    if (e.target.name === 'name') {
      setName(e.target.value);
    } else if (e.target.name === 'phone') {
      setPhone(e.target.value);
    }
  };

  return (
    <form action="" className={css.form} onSubmit={handleSubmit}>
      <label htmlFor="" className={css.lable}>
        <p className={css.titleLable}>Name</p>

        <input
          onChange={handleChange}
          name="name"
          type="text"
          className={css.input}
          value={name}
          required
        />
      </label>
      <p className={css.titleLable}>Number</p>
      <label htmlFor="" className={css.lable}>
        <input
          onChange={handleChange}
          name="phone"
          type="text"
          className={css.input}
          value={phone}
        />
      </label>
      <button type="submit" className={css.btnForm}>
        Add contact
      </button>
    </form>
  );
};

export default PhoneForm;
