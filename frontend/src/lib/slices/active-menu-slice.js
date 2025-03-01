import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeMenu: "dashboard",
  activeMenuHeading: "",
};

const activeMenuSlice = createSlice({
  name: "activeMenu",
  initialState,
  reducers: {
    setActiveMenu: (state, action) => {
      state.activeMenu = action.payload;
    },
    setActiveMenuHeading: (state, action) => {
      state.activeMenuHeading = action.payload;
    },
  },
});

export const { setActiveMenu, setActiveMenuHeading } = activeMenuSlice.actions;
export default activeMenuSlice.reducer;
