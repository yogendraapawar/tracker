import { configureStore } from "@reduxjs/toolkit";
import activeMenuReducer from "./features/active-menu-item/active-menu-slice";

export const makeStore = () => {
  return configureStore({
    reducer: { activeMenu: activeMenuReducer },
  });
};
