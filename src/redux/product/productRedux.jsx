import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { httpClient } from "../../utils/config";

const initialState = {
  checkGod: null,
  isLoading: false,
  error: null,
};

const productRedux = createSlice({
  name: "productRedux",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(checkGoods.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(checkGoods.fulfilled, (state, action) => {
        state.isLoading = false;
        state.checkGod = action.payload;
      })
      .addCase(checkGoods.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.message;
      });
  },
});

export const {} = productRedux.actions;
export default productRedux.reducer;
export const checkGoods = createAsyncThunk(
  "product/checkGoods",
  async (data) => {
    const response = await httpClient.post("/auth/scan", data);
    return response.data;
  }
);
