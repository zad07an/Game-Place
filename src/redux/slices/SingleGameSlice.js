import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { STATUSES } from "../statuses/STATUSES";

const API_URL = "http://localhost:8080/games";

const initialState = {
  game: {},
  status: STATUSES.IDLE
}

export const fetchSingleGame = createAsyncThunk("single_game/fetchSingleGame", async (id) => {
  try {
    const res = await axios.get(`${API_URL}/${id}`);
    return await res.data
  } catch (err) {
    console.log(err.message)
  }
})

const singleGameSlice = createSlice({
  name: 'single_game',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchSingleGame.pending, (state, action) => {
      state.status = STATUSES.LOADING;
    })
    .addCase(fetchSingleGame.rejected, (state, action) => {
      state.status = STATUSES.ERROR
    })
    .addCase(fetchSingleGame.fulfilled, (state, action) => {
      state.game = action.payload;
      state.status = STATUSES.IDLE;
    })
  }
})

export const {} = singleGameSlice.actions;
export default singleGameSlice.reducer;