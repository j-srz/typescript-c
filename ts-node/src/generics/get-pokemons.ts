import axios from "axios";
import { Pokemon } from "../interfaces/pokemon";


export const getPokemon = async( pokemonId: number):Promise<Pokemon> => {
    
    
    const resp = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${ pokemonId }`)


    console.log(resp.data.name);
    

    return resp.data;
    
}