import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { httpClient } from "../../utils/config";

const initialState = {
  recruitment: null,
  isLoading: false,
  error: null,
};

const pushJob = createSlice({
  name: "pushJob",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(recruitmentJob.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(recruitmentJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.recruitment = action.payload;
      })
      .addCase(recruitmentJob.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.message;
      });
  },
});

export const {} = pushJob.actions;

export default pushJob.reducer;

export const recruitmentJob = createAsyncThunk(
  "user/recruitmentJob",
  async (data) => {
    const response = await httpClient.post(`thue-cong-viec`, data);
    return response.data.content;
  }
);
