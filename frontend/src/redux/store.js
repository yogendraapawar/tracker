// src/redux/store.js
import triggerFlagReducer from './triggerFlagsSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    triggerFlag: triggerFlagReducer,
  },
});
