<script lang="ts">
import { ref,onMounted,computed } from 'vue';
import { usePokemonStore } from '../store/usePokemonStore';


export default{
    name: 'Pokemon',
    setup(){
      const useGetDatas = usePokemonStore()
      const datasPokemon = ref()
      const data = computed(() =>{
        return datasPokemon.value = useGetDatas.pokemonsDatas
      })
      return{
        data,
        datasPokemon
        
      }
    }
}
</script>
<template>

  <div class="w-80 h-96 flex justify-center items-center  p-4 mt-10 rounded-md bg-white gap-2">
    <span class="text-blue-900">{{data.name}}</span>
  </div>
</template>