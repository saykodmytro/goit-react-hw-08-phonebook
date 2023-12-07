import ContactList from './ContactList/ContactList';

import { Container } from './Container/Container';
import Filter from './Filter/Filter';
import PhoneForm from './PhoneForm/PhoneForm';

export const App = () => {
  return (
    //  <Layout>
    //   <Suspense fallback={<Loader />}>
    //     <div>
    //       <Routes>
    //         <Route path="/" element={<HomePage />} />
    //         <Route path="/login" element={<LoginPage />} />
    //         <Route path="/register" element={<RegisterPage />} />
    //         <Route path="/contacts" element={<ContactsPage />} />
    //         <Route path="/posts/:postId/*" element={<PostDetails />} />
    //         <Route path="*" element={<Navigate to="/" />} />
    //       </Routes>
    //     </div>
    //   </Suspense>
    // </Layout>

    <>
      <Container title="Phonebook">
        <PhoneForm />
      </Container>
      <Container title="Search">
        <Filter />
      </Container>
      <Container title="Contacts">
        <ContactList />
      </Container>
    </>
  );
};
