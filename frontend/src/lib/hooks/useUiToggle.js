import { useSelector, useDispatch } from 'react-redux';
import { 
    toggleSelectCategory, 
    toggleAddTransaction, 
    toggleAddCategory 
} from '../slices/ui-slice';

export const useUiToggle = () => {
    const dispatch = useDispatch();
    
    const {
        isSelectCategoryOpen,
        isAddTransactionOpen,
        isAddCategoryOpen
    } = useSelector((state) => state.ui);

    const handleSelectCategoryOpen = (open) => {
        console.log('Select Category Open:', open
        );
        dispatch(toggleSelectCategory(open));
    };

    const handleAddTransactionOpen = (open) => {
        dispatch(toggleAddTransaction(open));
    };

    const handleAddCategoryOpen = (open) => {
        dispatch(toggleAddCategory(open));
    };

    return {
        isSelectCategoryOpen,
        isAddTransactionOpen,
        isAddCategoryOpen,
        handleSelectCategoryOpen,
        handleAddTransactionOpen,
        handleAddCategoryOpen,
    };
};
