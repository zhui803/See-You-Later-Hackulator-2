import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "mainData",
  initialState: {
    money: 0,
    tasks: [],
    rewards: [],
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    addReward: (state, action) => {
      state.rewards.push(action.payload);
    },
    addMoney: (state, action) => {
      state.money += action.payload;
    },
    useMoney: (state, action) => {
      state.money -= action.payload;
    },
  },
});
export const { addTask, addReward, addMoney, useMoney } = dataSlice.actions;
export default dataSlice.reducer;
