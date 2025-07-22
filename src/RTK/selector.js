import { createSelector } from "@reduxjs/toolkit";

export const selectPokemonById = (pokemonId) =>
  createSelector(
    (state) => state.poke.data,
    (poke) => poke.find((el) => el.id === pokemonId)
  );

export const selectPokemonByReg = (reg, enToKo) =>
  createSelector(
    (state) => state.poke.data,
    (poke) => poke.filter((el) => el.name.match(reg) || el.name.match(enToKo))
  );

export const selectFavoritePoke = createSelector(
  (state) => state.poke.data,
  (state) => state.favoritePoke,
  (poke, favoritePoke) => {
    return poke.filter((el) => favoritePoke.includes(el.id));
  }
);
