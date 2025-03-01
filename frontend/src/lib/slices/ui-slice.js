import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isSelectCategoryOpen: false,
    isAddTransactionOpen: false,
    isAddCategoryOpen: false,
};

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggleSelectCategory: (state, action) => {
            state.isSelectCategoryOpen = action.payload;
        },
        toggleAddTransaction: (state, action) => {
            state.isAddTransactionOpen = action.payload;
        },
        toggleAddCategory: (state, action) => {
            state.isAddCategoryOpen = action.payload;
        },
    },
});

export const { 
    toggleSelectCategory, 
    toggleAddTransaction, 
    toggleAddCategory 
} = uiSlice.actions;

export default uiSlice.reducer;
