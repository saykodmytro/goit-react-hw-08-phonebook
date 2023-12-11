import { Container } from 'components/Container/Container';
import css from '../module-css/LoginForm.module.css';
import React from 'react';

const LoginPage = () => {
  const handleSubmit = e => {
    e.preventDefault();
    const userEmail = e.currentTarget.elements.userEmail.value;
    const userPassword = e.currentTarget.elements.pasword.value;
    const loginData = { userEmail, userPassword };
    console.log('loginData: ', loginData);
  };

  return (
    <div>
      <Container title="Login Form">
        <form className={css.form} onSubmit={handleSubmit}>
          <p className={css.titleLable}>Email</p>
          <label htmlFor="" className={css.lable}>
            <input
              name="userEmail"
              type="email"
              className={css.input}
              autoComplete="current-email"
              required
            />
          </label>

          <p className={css.titleLable}>Password</p>
          <label htmlFor="" className={css.lable}>
            <input
              name="pasword"
              type="password"
              className={css.input}
              autoComplete="current-password"
              required
            />
          </label>
          <button type="submit" className={css.btnForm}>
            Login
          </button>
        </form>
      </Container>
    </div>
  );
};
export default LoginPage;
