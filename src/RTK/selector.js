import { createSelector } from "@reduxjs/toolkit";

export const selectPokemonById = (pokemonId) =>
  createSelector(
    (state) => state.poke.data,
    (poke) => poke.find((el) => el.id === pokemonId)
  );
