<script lang="ts">
import { ref,computed } from 'vue';
import { usePokemonStore } from '../store/usePokemonStore';
import Evolution from '../components/Evolution/index.vue'
import Stats from '../components/Stats/index.vue'

export default{
    name: 'Pokemon',
    components:{
      Stats,
      Evolution,
    },
    setup(){
      const useGetDatas = usePokemonStore()
      const datasPokemon = ref()
      const data = computed(() =>{
        return datasPokemon.value = useGetDatas.pokemonsDatas
      })
      
      return{
        data,
        datasPokemon,
        
      }
    }
}
</script>
<template>

  <div class="max-w-[24rem] h-[32rem] w-[100%] bg-white  flex justify-center items-center  p-4 mt-10 rounded-md  gap-2">
    <div class="h-full w-full flex flex-col items-center p-4">
      <img 
        :src="'https://img.pokemondb.net/artwork/large/'+data.name+'.jpg'" 
        alt="name pokemon" 
        class="w-52"
      >
      <span class="text-gray-300 mt-10 text-4xl font-bold">{{data.name.charAt(0).toUpperCase() + data.name.slice(1)}}</span>
      <span class="text-blue-900">{{data.types[0].type.name}}</span>
      
      
    </div>
   
  </div>
</template>