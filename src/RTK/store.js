import { configureStore } from "@reduxjs/toolkit"
import { pokeSlice } from "./slice"

export const store = configureStore({
    reducer: {
        poke: pokeSlice.reducer
    }
})