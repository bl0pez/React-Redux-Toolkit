import axios from "axios";
import { pokemonApi } from "../../../api/PokemonApi";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice"

export const getPokemons = (page = 0) => {
    return async (dispatch, getSatate) => {
        dispatch(startLoadingPokemons());


        const {data} = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`);

        const pokemons = await pokemonGet(data.results)

        dispatch(setPokemons({ pokemons , nextPage: page + 1, backPage: page - 1}));

    }
}




const pokemonGet = async(pokemons) => {

        let p = [];    

         for (let i = 0; i < pokemons.length; i++) {
            const { data } = await pokemonApi.get(`/pokemon/${pokemons[i].name}`);

            p.push({
                name: data.name,
                img: data.sprites.front_default,
            });
            
         }

         return p;

    // const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);


}