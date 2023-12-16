import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { httpClient } from "../../utils/config";

const initialState = {
  listjob: null,
  isLoading: false,
  error: null,
};

const listJob = createSlice({
  name: "listJob",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(job.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(job.fulfilled, (state, action) => {
        state.isLoading = false;
        state.listjob = action.payload;
      })
      .addCase(job.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.message;
      });
  },
});

export const {} = listJob.actions;

export default listJob.reducer;

export const job = createAsyncThunk(
  "product/job",
  async () => {
    const response = await httpClient.get("/cong-viec");
    return response.data.content;
  }
);
