import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "mainData",
  initialState: {
    money: 100,
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
    updateValidity: (state) => {
      state.rewards = state.rewards.map((reward) => ({
        ...reward,
        valid: state.money >= parseInt(reward.cost),
      }));
    },
    addMoney: (state, action) => {
      state.money += action.payload;
    },
    useMoney: (state, action) => {
      state.money -= action.payload;
    },
  },
});
export const { addTask, addReward, updateValidity, addMoney, useMoney } =
  dataSlice.actions;
export default dataSlice.reducer;
