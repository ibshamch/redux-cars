import { configureStore } from "@reduxjs/toolkit";
import {
  addCar,
  removeCar,
  changeSearchTerm,
  carsReducer,
} from "./slices/carsSlice";
import { formReducer, changeCost, changeCarName } from "./slices/formSlice";

const store = configureStore({
  reducer: {
    form: formReducer,
    cars: carsReducer,
  },
});

export {
  store,
  addCar,
  removeCar,
  changeSearchTerm,
  changeCost,
  changeCarName,
};
