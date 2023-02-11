<script lang="ts">
  
import { defineStore } from "pinia";

import {ref, onMounted } from "vue";
import {usePokemonStore} from '../store/usePokemonStore'
  
  
 
  
  export default{
    name: 'Home',

    setup(){
      const useGetDatas = usePokemonStore()
      const pokemonInput = ref('')
      const pokemonData = ref()
      async function handleSearch(){
        await useGetDatas.fetchPokemon(pokemonInput.value)
        pokemonData.value = useGetDatas.pokemonsDatas

        console.log(pokemonData.value)
      }
      
      return{
        pokemonInput,
        handleSearch,
      }
    },
     
    
    methods: {
     
    }
  }
  

</script>

<template>
   <div class="h-52 flex justify-center items-center max-w-[300] w-[100%] p-4 mt-10 rounded-md bg-gray-800 gap-2">
      <input placeholder="Procurar" type="text" v-model="pokemonInput" class="py-1 px-2 text-gray-900 rounded">
      <router-link to="/pokemon"><button @click="handleSearch" class="px-6 py-1 bg-yellow-600  font-bold shadow-lg shadow-slate-900/40 rounded ease-out duration-300  hover:bg-red-800"> Procurar</button></router-link>
    </div>
</template>