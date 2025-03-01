import { configureStore } from "@reduxjs/toolkit";
import activeMenuReducer from "./slices/active-menu-slice";
import flagSliceReducer from "./slices/flag-slice";
import categoryReducer from "./slices/category-slice";
import uiReducer from "./slices/ui-slice";
export const makeStore = () => {
  return configureStore({
    reducer: {
      category: categoryReducer,
      activeMenu: activeMenuReducer,
      flagSlice: flagSliceReducer,
      ui: uiReducer,
    },
  });
};
