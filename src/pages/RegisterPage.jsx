import css from '../module-css/RegisterForm.module.css';
import React from 'react';
import { selectAuthError, selectAuthIsLoading } from 'redux/auth/auth.selector';
import { Container } from 'components/Container/Container';
import { useDispatch, useSelector } from 'react-redux';
import { authRegister } from 'redux/auth/operations';
import Loader from 'components/Loader/Loader';
import Notiflix from 'notiflix';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAuthIsLoading);
  const error = useSelector(selectAuthError);

  const onSubmitForm = e => {
    e.preventDefault();
    const form = e.currentTarget;

    const name = form.elements.userName.value;
    const email = form.elements.userEmail.value;
    const password = form.elements.userPassword.value;

    const userData = {
      name,
      email,
      password,
    };

    dispatch(authRegister(userData));

    form.reset();
  };

  return (
    <div>
      <Container title="Register Form">
        <form className={css.form} onSubmit={onSubmitForm}>
          <label htmlFor="" className={css.lable}>
            <p className={css.titleLable}>Name</p>
            <input name="userName" type="text" className={css.input} required />
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
              name="userPassword"
              type="password"
              className={css.input}
              autoComplete="current-password"
              required
            />
          </label>
          <button type="submit" className={css.btnForm}>
            Register
          </button>
          {isLoading && <Loader />}
          {error !== null && Notiflix.Notify.warning({ error })}
        </form>
      </Container>
    </div>
  );
};

export default RegisterPage;
