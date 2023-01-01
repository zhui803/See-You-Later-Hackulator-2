import { configureStore } from "@reduxjs/toolkit";
import mainDataReducer from "../slices/mainData";
import rewardsHelperReducer from "../slices/rewardsHelper";
export default configureStore({
  reducer: { mainData: mainDataReducer, rewardsHelper: rewardsHelperReducer },
});
