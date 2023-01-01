import { createSlice } from "@reduxjs/toolkit";

export const rewardsHelperSlice = createSlice({
  name: "rewardsHelper",
  initialState: {
    showInputs: false,
    text: "",
    number: "",
    rewardsID: 0,
  },
  reducers: {
    toggleShowInputs: (state) => {
      state.showInputs = !state.showInputs;
    },
    updateText: (state, action) => {
      state.text = action.payload;
    },
    resetText: (state, action) => {
      state.text = "";
    },
    updateNumber: (state, action) => {
      state.number = action.payload;
    },
    resetNumber: (state, action) => {
      state.number = "";
    },
    incrementRewardsID: (state) => {
      state.rewardsID += 1;
    },
  },
});
export const {
  toggleShowInputs,
  updateText,
  resetText,
  updateNumber,
  resetNumber,
  incrementRewardsID,
} = rewardsHelperSlice.actions;
export default rewardsHelperSlice.reducer;
