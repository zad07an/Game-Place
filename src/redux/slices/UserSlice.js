import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:8080/user";

const initialState = {
  user: {},
  isLoggedIn: false
}

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  try {
    const res = await axios.get(API_URL);
    return await res.data
  } catch (err) {
    console.log(err.message)
  }
})

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true
      })
  }
})

export const {} = userSlice.actions;
export default userSlice.reducer;