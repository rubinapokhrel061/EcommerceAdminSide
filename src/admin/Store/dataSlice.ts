import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InititalState } from "../Types/dataTypes"; // Ensure this type is defined properly
import { Status } from "../Types/status"; // Ensure this enum is defined properly

// Define the initial state based on the InititalState type
const initialState: InititalState = {
  orders: [],
  products: [],
  users: [],
  status: Status.LOADING,
};

// Create the slice
const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    // Define a reducer to set the status
    setStatus(state, action: PayloadAction<Status>) {
      state.status = action.payload;
    },
  },
});

// Export the action and reducer
export const { setStatus } = dataSlice.actions;
export default dataSlice.reducer;
