import { configureStore } from "@reduxjs/toolkit";
import { favoritePokeSlice, pokeSlice } from "./slice";
import Favorites from "../pages/Favorites";

export const store = configureStore({
  reducer: {
    poke: pokeSlice.reducer,
    favoritePoke: favoritePokeSlice.reducer,
  },
});
