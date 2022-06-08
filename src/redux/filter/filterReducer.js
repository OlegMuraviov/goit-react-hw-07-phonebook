import { createReducer } from '@reduxjs/toolkit';
import { changeFilter } from './filterActions';

const filterReducer = createReducer('', {
  [changeFilter]: (state, { payload }) => payload,
});

export default filterReducer;
