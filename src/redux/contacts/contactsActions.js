import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/add', data => {
  const newContact = { ...data, id: nanoid() };
  return { payload: newContact };
});
export const removeContact = createAction('contacts/remove');

const actionCreators = {
  addContact,
  removeContact,
};

export default actionCreators;
