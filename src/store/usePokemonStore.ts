import { defineStore } from 'pinia'
import { api } from '../services/api'
// Import axios to make HTTP requests

interface pokemonsDatasProps{
  name: string;
}
export const usePokemonStore = defineStore("pokemon",{
    state: () => {
      return {
        pokemonsDatas:<pokemonsDatasProps>{}
      }
    },
    actions: {
      async fetchPokemon(name:string) {
        try {
          const datas = await api.get(`/${name}`)
          this.pokemonsDatas = datas.data
        }
        catch (error) {
          alert(error)
          console.log(error)
        }
      }
    },
   
    
})