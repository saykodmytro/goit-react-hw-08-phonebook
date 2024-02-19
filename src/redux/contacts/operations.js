import { createAsyncThunk } from '@reduxjs/toolkit';

import { instance } from 'redux/auth/operations';

export const fetchContacts = createAsyncThunk(
  'contacts/getAll',
  async (_, thunkApi) => {
    try {
      const { data } = await instance.get(`/contacts`);
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, thunkApi) => {
    try {
      const { data } = await instance.post(`/contacts`, { name, number });
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      await instance.delete(`/contacts/${contactId}`);
      return contactId;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
