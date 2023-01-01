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
    setText: (state, action) => {
      state.text = action.payload;
    },
    resetText: (state) => {
      state.text = "";
    },
    setNumber: (state, action) => {
      state.number = action.payload;
    },
    resetNumber: (state) => {
      state.number = "";
    },
    incrementRewardsID: (state) => {
      state.rewardsID += 1;
    },
  },
});
export const {
  toggleShowInputs,
  setText,
  resetText,
  setNumber,
  resetNumber,
  incrementRewardsID,
} = rewardsHelperSlice.actions;
export default rewardsHelperSlice.reducer;
