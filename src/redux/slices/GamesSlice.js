import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { STATUSES } from "../statuses/STATUSES";

const API_URL = "http://localhost:8080/games"

const initialState = {
  data: [],
  status: STATUSES.IDLE
}

export const fetchGames = createAsyncThunk("games/fetchGames", async (term) => {
  try {
    if (term) {
      const res = await axios.get(`${API_URL}?title_lower=${term}`);
      return await res.data
    }
    const res = await axios.get(`${API_URL}`);
    return await res.data
  } catch (err) {
    console.log(err.message)
  }
})

const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGames.pending, (state, action) => {
        state.status = STATUSES.LOADING
      })
      .addCase(fetchGames.rejected, (state, action) => {
        state.status = STATUSES.ERROR
      })
      .addCase(fetchGames.fulfilled, (state, action) => {
        state.data = action.payload
        state.status = STATUSES.IDLE
      })
  }
})

export const {} = gamesSlice.actions;
export default gamesSlice.reducer;