import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface BoolState {
  value: boolean;
}

const boolInitial: BoolState = {
  value: false,
};

export const booleanSlice = createSlice({
  name: "bool",
  initialState: boolInitial,
  reducers: {
    change: (state) => {
      state.value = !state.value;
    },
    valueChange: (state, action: PayloadAction<boolean>) => {
      state.value = !action.payload;
    },
  },
});

export const { change, valueChange } = booleanSlice.actions;

export default booleanSlice.reducer;
