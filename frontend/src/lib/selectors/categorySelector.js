import { createSelector } from '@reduxjs/toolkit';

export const selectAllCategories = (state) => state.category.categories;
export const selectSelectedCategory = (state) => state.category.selectedCategory;

export const selectCategoriesByBackground = createSelector(
    [selectAllCategories],
    (categories) => {
        return categories.reduce((acc, category) => {
            const { backgroundColor } = category;
            if (!acc[backgroundColor]) {
                acc[backgroundColor] = [];
            }
            acc[backgroundColor].push(category);
            return acc;
        }, {});
    }
);
