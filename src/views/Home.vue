<script lang="ts">
  
import {ref } from "vue";
import {usePokemonStore, useEvoluitonPokemonStore} from '../store/usePokemonStore'

  export default {
    name: 'Home',

    setup(){
      const useGetDatas = usePokemonStore()
      const useGetEvol = useEvoluitonPokemonStore()
      const pokemonInput = ref('')
      const pokemonData = ref()
      const pokemonEvolutions = ref()

      async function handleSearch(){
        await useGetDatas.fetchPokemon(pokemonInput.value)
        pokemonData.value = useGetDatas.pokemonsDatas
        
        console.log(pokemonData.value)
        
      }
      async function getEvolution(id:number){
        await useGetEvol.fetchEvolution(id)
        return console.log(pokemonEvolutions.value = useGetEvol.pokemonEvolution)
        
      }
      
      return{
        pokemonInput,
        handleSearch,
        getEvolution
      }


    }
  }
</script>

<template>
  <main class='w-full h-full flex flex-col justify-center items-center'>
      <div class="h-52 flex flex-col justify-center items-center max-w-[300] w-[100%] p-4 mt-10 rounded-md bg-gray-800 gap-2">
          <p class="text-lg">Encontre um pokemon</p>
          <div class="flex mt-10 gap-2">
            <input placeholder="Procurar" type="text" v-model="pokemonInput" class="py-1 px-2 text-gray-900 rounded">
            <router-link to="/pokemon">
              <button 
              @click="handleSearch" 
              class="px-6 py-1 bg-pink-600  font-bold shadow-lg shadow-slate-900/40 rounded ease-out duration-300  hover:bg-red-800"> 
                Procurar
              </button>
            </router-link>
          </div>
      </div>

      <footer class="mt-6"> Done by Felipe Santana</footer>
  </main>
</template>