import { createReducer } from '@reduxjs/toolkit';
import { addContact, removeContact } from './contactsActions';

const initialStore = [];

const contactsReducer = createReducer(initialStore, {
  [addContact]: (store, { payload }) => [...store, payload],
  [removeContact]: (store, { payload }) =>
    store.filter(({ id }) => id !== payload),
});

export default contactsReducer;
