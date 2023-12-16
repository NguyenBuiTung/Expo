import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { httpClient } from "../../utils/config";

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const userRedux = createSlice({
  name: "userRedux",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {} = userRedux.actions;

export default userRedux.reducer;

export const getUser = createAsyncThunk("userRedux/getUser", async () => {
  const response = await httpClient.post("/auth/me");
  return response.data;
});
