import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        page: 0,
        pokemons: [],
        isLoading: false,
    },
    reducers: {
        startLoadingPokemons: (state, /* action */) => {
            state.isLoading = true;
        },
        setPokemons: (state, action) => {
                state.isLoading = false;
                state.nextPage = action.payload.nextPage;
                state.backPage = action.payload.backPage;
                state.pokemons = action.payload.pokemons;
        }
    }
});





export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;