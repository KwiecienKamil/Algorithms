import { configureStore, createSlice } from "@reduxjs/toolkit";

export const backpackSlice = createSlice({
  name: "backpack",
  initialState: {
    values: [60, 100, 120],
    weights: [10, 20, 30],
    target: 20,
    sort: [],
    currentBP: 0
  },
  reducers: {
    currentV: (state, action) => {
      state.values = action.payload;
    },
    currentW: (state, action) => {
        state.weights = action.payload;
      },
      currentT: (state, action) => {
        state.target = action.payload;
      },
      currentP: (state, action) => {
        state.sort = action.payload;
      },
      currentBP:(state, action) => {
        state.sort = action.payload;
      },
  },
});

export const { currentV } = backpackSlice.actions;
export const { currentW } = backpackSlice.actions;
export const { currentT } = backpackSlice.actions;
export const { sort } = backpackSlice.actions;
export const { currentBP } = backpackSlice.actions;

export const store = configureStore({
  reducer: {
    backpack: backpackSlice.reducer,
  },
});
