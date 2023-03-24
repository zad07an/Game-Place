import { configureStore } from "@reduxjs/toolkit";
import gamesReducer from '../slices/GamesSlice';
import singleGameReducer from '../slices/SingleGameSlice';
import userReducer from '../slices/UserSlice';
import wishListReducer from '../slices/WishListSlice';
import catReducer from '../slices/CatSlice';

const store = configureStore({
  reducer: {
    games: gamesReducer,
    single_game: singleGameReducer,
    user: userReducer,
    wish_list: wishListReducer,
    cat: catReducer
  }
})

export default store;