import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operation';

const initialState = {
  contacts: {
    contacts: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  reducers: {
    filteredContact(state, { payload }) {
      state.filter = payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.contacts.isLoading = true;
        state.contacts.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.contacts = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload;
      })

      .addCase(addContact.pending, state => {
        state.contacts.isLoading = true;
        state.contacts.error = null;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.contacts = [action.payload, ...state.contacts.contacts];
      })
      .addCase(addContact.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload;
      })

      .addCase(deleteContact.pending, state => {
        state.contacts.isLoading = true;
        state.contacts.error = null;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.contacts = state.contacts.contacts.filter(
          contact => contact.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload;
      });
  },
});

export const { filteredContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
