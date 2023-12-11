import ContactList from 'components/ContactList/ContactList';
import { Container } from 'components/Container/Container';
import Filter from 'components/Filter/Filter';
import PhoneForm from 'components/PhoneForm/PhoneForm';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectVisibleContacts } from 'redux/contacts/contacts.selector';

const PhoneBookPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <Container title="Phonebook">
        <PhoneForm />
      </Container>
      <Container title="Search">
        <Filter />
      </Container>
      <Container title="Contacts">
        <ContactList contacts={contacts} />
      </Container>
    </div>
  );
};

export default PhoneBookPage;
