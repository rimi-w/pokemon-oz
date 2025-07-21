import { createAsyncThunk } from "@reduxjs/toolkit"

export const fetchPokeDataById = createAsyncThunk(
    `poke/fetchPokeDataById`,
    async (maxPokeId) => {
        const pokemonIds = Array.from({ length: maxPokeId }, (_, index) => index + 1)

        const pokeFetchApi = async function (pokemonId) {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}/`)
            const data = await res.json();

            const pokeData = {
                id: pokemonId,
                name: data.names.find(el => el.language.name === `ko`).name,
                description: data.flavor_text_entries.find(el => el.language.name === `ko`).flavor_text,
                front: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`,
                back: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemonId}.png`,
            }
            return pokeData;
        }
        return await Promise.all(pokemonIds.map((id) => pokeFetchApi(id)))
    }
)