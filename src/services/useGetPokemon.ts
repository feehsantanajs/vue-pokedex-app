import { defineStore } from 'pinia'
// Import axios to make HTTP requests
import axios from "axios"

export const useGetPokemon = defineStore("pokemon",{
    state: () => ({
      pokemons:[]
    }),
    getters: {
      getPokemons(state){
        return state.pokemons
      }
    },
    actions: {
      async fetchpPokemons() {
        try {
          const data = await axios.get('https://pokeapi.co/api/v2/pokemon')
            this.pokemons = data.data
          }
          catch (error) {
            alert(error)
            console.log(error)
        }
      }
    },
})