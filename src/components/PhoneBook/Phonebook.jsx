import ContactList from 'components/ContactList/ContactList';
import { Container } from 'components/Container/Container';
import Filter from 'components/Filter/Filter';
import PhoneForm from 'components/PhoneForm/PhoneForm';
import React from 'react';

const Phonebook = () => {
  return (
    <div>
      <Container title="Phonebook">
        <PhoneForm />
      </Container>
      <Container title="Search">
        <Filter />
      </Container>
      <Container title="Contacts">
        <ContactList />
      </Container>
    </div>
  );
};

export default Phonebook;
