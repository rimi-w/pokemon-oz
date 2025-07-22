import { createSlice } from "@reduxjs/toolkit";
import { fetchPokeDataById } from "./thunk";

export const pokeSlice = createSlice({
  name: `poke`,
  initialState: {
    data: [],
    isLoading: true,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokeDataById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPokeDataById.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchPokeDataById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      });
  },
});

export const favoritePokeSlice = createSlice({
  name: `favoritePoke`,
  initialState: [],
  reducers: {
    addToFavorites(state, action) {
      state.push(action.payload);
    },
    removeFromFavorites(state, action) {
      const index = state.indexOf(action.payload);

      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});
