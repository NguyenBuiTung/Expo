import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { httpClient } from "../../utils/config";

const initialState = {
  detailjob: null,
  isLoading: false,
  error: null,
};

const listJobDetail = createSlice({
  name: "listJobDetail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDetailJob.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getDetailJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.detailjob = action.payload;
      })
      .addCase(getDetailJob.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.message;
      });
  },
});

export const {} = listJobDetail.actions;

export default listJobDetail.reducer;

export const getDetailJob = createAsyncThunk(
  "product/getDetailJob",
  async (id) => {
    const response = await httpClient.get(`/cong-viec/${id}`);
    // console.log('response: ', response.data.content);
    
    return response.data.content;
  }
);
