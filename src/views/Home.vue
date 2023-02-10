<script lang="ts">
  
 
  import { api } from "../services/api";
  import Vue, { defineComponent, ref,onMounted } from "vue";
  
    export default {
      name:'App',
      data(){
        return{
          pokemonData: {},
          pokemonName: '',
        }
      },
      methods: {
        async handleSearch(){
          try{
            const findPokemon = await api.get(`/${this.pokemonName}`)
            return console.log(findPokemon.data)
          }catch(err){
            console.log(err)
          }
        }
      },
     
    }

  
</script>
<template>
   <div class="h-52 flex justify-center items-center max-w-[300] w-[100%] p-4 mt-10 rounded-md bg-gray-800 gap-2">
      <input placeholder="Procurar" type="text" v-model="pokemonName" class="py-1 px-2 text-gray-900 rounded">
      <button @click="handleSearch" class="px-6 py-1 bg-yellow-600  font-bold shadow-lg shadow-slate-900/40 rounded ease-out duration-300  hover:bg-red-800"> Procurar</button>
    </div>
</template>