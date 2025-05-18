// src/redux/triggerFlagSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSelectCategoryOpen: false,
  isTransactionFormOpen: false,
};

const triggerFlagSlice = createSlice({
  name: 'triggerFlag',
  initialState,
  reducers: {
    openSelectCategoryModal: (state) => {
      state.isSelectCategoryOpen = true;
    },
    closeSelectCategoryModal: (state) => {
      state.isSelectCategoryOpen = false;
    },
    toggleSelectCategoryModal: (state) => {
      state.isSelectCategoryOpen = !state.isSelectCategoryOpen;
    },
    openTransactionForm: (state) => {
      state.isTransactionFormOpen = true;
    },
    closeTransactionForm: (state) => {
      state.isTransactionFormOpen = false;
    },
    toggleTransactionForm: (state) => {
      state.isTransactionFormOpen = !state.isTransactionFormOpen;
    },
  },
});

export const {
  openSelectCategoryModal,
  closeSelectCategoryModal,
  toggleSelectCategoryModal,
  toggleTransactionForm,
  openTransactionForm,
  closeTransactionForm,
} = triggerFlagSlice.actions;

export default triggerFlagSlice.reducer;
