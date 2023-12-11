import { Container } from 'components/Container/Container';
import React from 'react';
import css from './RegisterForm.module.css';

const RegisterForm = () => {
  return (
    <div>
      <Container title="Register Form">
        <form className={css.form}>
          <label htmlFor="" className={css.lable}>
            <p className={css.titleLable}>Name</p>
            <input name="name" type="text" className={css.input} required />
          </label>

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
              name="userPasword"
              type="password"
              className={css.input}
              autoComplete="current-password"
              required
            />
          </label>
          <button type="submit" className={css.btnForm}>
            Register
          </button>
        </form>
      </Container>
    </div>
  );
};

export default RegisterForm;
