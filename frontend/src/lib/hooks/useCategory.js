import { useSelector, useDispatch } from 'react-redux';
import { 
    selectCategory, 
    addCategory,
    setCategories 
} from '../slices/category-slice';
import { toggleSelectCategory } from '../slices/ui-slice';

export const useCategory = () => {
    const dispatch = useDispatch();
    const categories = useSelector(state => state.category.categories);
    const selectedCategory = useSelector(state => state.category.selectedCategory);
    const isLoading = useSelector(state => state.category.isLoading);
    const error = useSelector(state => state.category.error);

    const handleSelectCategory = (category) => {
        console.log('Category selected:', category);
        dispatch(selectCategory(category));
        // dispatch(toggleSelectCategory(false))

    };

    const handleAddCategory = (category) => {
        dispatch(addCategory(category));
    };

    return {
        categories,
        selectedCategory,
        isLoading,
        error,
        handleSelectCategory,
        handleAddCategory,
    };
};
