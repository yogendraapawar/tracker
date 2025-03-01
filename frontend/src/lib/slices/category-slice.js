import { createSlice } from '@reduxjs/toolkit';
import { predefinedCategories } from '@/mock-store/categories';

const initialState = {
    categories: predefinedCategories,
    selectedCategory: null,
    isLoading: false,
    error: null,
};

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        setCategories: (state, action) => {
            state.categories = action.payload;
        },
        addCategory: (state, action) => {
            state.categories.push(action.payload);
        },
        selectCategory: (state, action) => {
            state.selectedCategory = action.payload;
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
});

export const { 
    setCategories, 
    addCategory, 
    selectCategory,
    setLoading,
    setError 
} = categorySlice.actions;

export default categorySlice.reducer;
