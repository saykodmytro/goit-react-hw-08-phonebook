import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  authLogOut,
  // authLogin,
  authRefresh,
  authRegister,
  loginThunk,
} from './operations';

const initialState = {
  isLoading: false,
  error: null,
  authenticated: false,
  token: null,
  userData: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.authenticated = true;
        state.token = payload.token;
        state.userData = payload.user;
      })
      .addCase(authRegister.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.authenticated = true;
        state.token = payload.token;
        state.userData = payload.user;
      })
      .addCase(authLogOut.fulfilled, () => {
        return initialState;
      })
      .addCase(authRefresh.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.authenticated = true;
        state.userData = payload;
      })

      .addMatcher(
        isAnyOf(
          loginThunk.pending,
          authRegister.pending,
          authRefresh.pending,
          authLogOut.pending
        ),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          loginThunk.rejected,
          authRegister.rejected,
          authRefresh.rejected,
          authLogOut.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      ),
});

export const authReducer = authSlice.reducer;
