import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { STATUSES } from "../statuses/STATUSES";

const API_URL = "http://localhost:8080/wish_list";

const initialState = {
  wish_list_data: [],
  status: STATUSES.IDLE
}

export const fetchWishList = createAsyncThunk("wish_list/fetchWishList", async () => {
  try {
    const res = await axios.get(API_URL);
    return await res.data;
  } catch (err) {
    console.log(err.message);
  }
})

export const addToWishList = createAsyncThunk("wish_list/addToWishList", async (data) => {
  try {
    const res = await axios.post(API_URL, data);
    return await res.data;
  } catch (err) {
    console.log(err.message);
  }
})

export const removeFromWishList = createAsyncThunk("wish_list/removeFromWishList", async (id) => {
  try {
    const res = await axios.delete(`${API_URL}/${id}`);
    return await id;
  } catch (err) {
    console.log(err.message)
  }
})

const wishListSlice = createSlice({
  name: "wish_list",  
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addToWishList.pending, (state, action) => {
        state.status = STATUSES.LOADING
      })
      .addCase(addToWishList.fulfilled, (state, action) => {
        state.wish_list_data.push(action.payload);
        state.status = STATUSES.IDLE
      })
      .addCase(addToWishList.rejected, (state, action) => {
        state.status = STATUSES.ERROR
      })
      .addCase(fetchWishList.pending, (state, action) => {
        state.status = STATUSES.LOADING
      })
      .addCase(fetchWishList.fulfilled, (state, action) => {
        state.wish_list_data = action.payload;
        state.status = STATUSES.IDLE
      })
      .addCase(fetchWishList.rejected, (state, action) => {
        state.status = STATUSES.ERROR
      })
      .addCase(removeFromWishList.pending, (state, action) => {
        state.status = STATUSES.LOADING
      })
      .addCase(removeFromWishList.fulfilled, (state, action) => {
        state.wish_list_data = state.wish_list_data.filter(item => item.id !== action.payload)
        state.status = STATUSES.IDLE
      })
      .addCase(removeFromWishList.rejected, (state, action) => {
        state.status = STATUSES.ERROR
      })
  }
})

export const {} = wishListSlice.actions;
export default wishListSlice.reducer; 