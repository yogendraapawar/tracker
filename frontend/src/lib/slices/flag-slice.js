import AddCategory from "@/components/AddCategory";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAddCategoryMenuVisible: true,
};

const flagSlice = createSlice({
  name: "flagSlice",
  initialState,
  reducers: {
    setIsAddCategoryMenuVisible: (state, action) => {
      state.isAddCategoryMenuVisible = action.payload;
    },
  },
});

export const { setIsAddCategoryMenuVisible } = flagSlice.actions;
export default flagSlice.reducer;
