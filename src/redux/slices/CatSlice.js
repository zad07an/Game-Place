import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { STATUSES } from "../statuses/STATUSES";

const API_URL = "http://localhost:8080/categories";

const initialState = {
  cats: [],
  status: STATUSES.IDLE
}

export const fetchCats = createAsyncThunk("cat/fetchCats", async () => {
  try {
    const res = await axios.get(API_URL);
    return await res.data;
  } catch (err) {
    console.log(err.message);
  }
})

const catSlice = createSlice({
  name: "cat",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCats.pending, (state, {payload}) => {
        state.status = STATUSES.LOADING
      })
      .addCase(fetchCats.fulfilled, (state, {payload}) => {
        state.cats = payload
        state.status = STATUSES.IDLE
      })
      .addCase(fetchCats.rejected, (state, {payload}) => {
        state.status = STATUSES.ERROR
      })
  }
})

export const {} = catSlice.actions;
export default catSlice.reducer;