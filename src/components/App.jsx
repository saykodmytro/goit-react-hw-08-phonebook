import { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Layout from './Layout/Layout';
import Loader from './Loader/Loader';
import LoginForm from './LoginForm/LoginForm';
import Phonebook from './PhoneBook/Phonebook';
import RegisterForm from './RegisterForm/RegisterForm';

export const App = () => {
  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/contacts" element={<Phonebook />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Suspense>
    </Layout>
  );
};
