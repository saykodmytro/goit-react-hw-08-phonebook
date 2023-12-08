import { Container } from 'components/Container/Container';
import React from 'react';
import css from './LoginForm.module.css';

const LoginForm = () => {
  return (
    <div>
      <Container title="Login Form">
        <form className={css.form}>
          <p className={css.titleLable}>Email</p>
          <label htmlFor="" className={css.lable}>
            <input name="email" type="email" className={css.input} />
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

export default LoginForm;
