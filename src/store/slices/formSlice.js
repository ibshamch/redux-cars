import { createSlice } from "@reduxjs/toolkit";
import { addCar } from "./carsSlice";
const formSlice = createSlice({
  name: "form",
  initialState: {
    name: "",
    cost: 0,
  },
  reducers: {
    changeCarName(state, action) {
      //payload will be the name
      state.name = action.payload;
    },
    changeCost(state, action) {
      // payload data will be the cost
      state.cost = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addCar, (state, action) => {
      state.name = "";
      state.cost = 0;
    });
  },
});
export const { changeCost, changeCarName } = formSlice.actions;
export const formReducer = formSlice.reducer;
