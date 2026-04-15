import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCountValue = createAsyncThunk(
  "counter/fetchValue",
  async () => {
    await new Promise((r) => setTimeout(r, 3000));
    return 5;
  },
);

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0, loading: false },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },

  // extraReducer is used to handle async operation
  extraReducers: (builder) => {
    builder.addCase(fetchCountValue.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCountValue.fulfilled, (state, action) => {
      state.loading = false;
      state.value += action.payload;
    });
    builder.addCase(fetchCountValue.rejected, (state) => {
      state.loading = false;
    });
  },
});
export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
