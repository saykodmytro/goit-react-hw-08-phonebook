import { Container } from 'components/Container/Container';
import css from '../module-css/LoginForm.module.css';
import React from 'react';
import Notiflix from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthError, selectAuthIsLoading } from 'redux/auth/auth.selector';
import { loginThunk } from 'redux/auth/operations';
import Loader from 'components/Loader/Loader';

const LoginPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAuthIsLoading);
  const error = useSelector(selectAuthError);

  const handleSubmit = e => {
    e.preventDefault();
    const email = e.currentTarget.elements.userEmail.value;
    const password = e.currentTarget.elements.userPassword.value;
    const userData = { email, password };

    dispatch(loginThunk(userData));
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
              name="userPassword"
              minLength={7}
              type="password"
              className={css.input}
              autoComplete="current-password"
              required
            />
          </label>
          <button type="submit" className={css.btnForm}>
            Login
          </button>
          {isLoading && <Loader />}
          {error !== null && Notiflix.Notify.warning({ error })}
        </form>
      </Container>
    </div>
  );
};
export default LoginPage;
