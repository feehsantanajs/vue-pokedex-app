<script lang="ts">
import { useEvoluitonPokemonStore, usePokemonStore } from '../../store/usePokemonStore';
import { evolutionApi } from '../../services/api'
import {ref,reactive, computed, onMounted } from 'vue'


export default{
  name: 'Evolution',
  
  setup(){
      const useGetBasicDatas = usePokemonStore()
      const useGetEvelutionDatas = useEvoluitonPokemonStore()

      const pokemonId = reactive({
        loading: useGetBasicDatas.pokemonsDatas.id,
        updated: computed(() => {
          return useGetBasicDatas.pokemonsDatas.id;
        })
      })
      
      const datasPokemon = ref()
      const data = computed(() =>{
        //return datasPokemon.value = useGetDatas.pokemonsDatas
      })
      
      return{
        data,
        datasPokemon,
        
      }
  }
   
}
  // var evoData = response.data.chain;


  // const data = computed(() =>{
  //   return datasPokemon.value = useGetDatas.pokemonsDatas
  // })
  // do {
  //   var evoDetails = evoData['evolution_details'][0];

  //   evoChain.push({
  //     "species_name": evoData.species.name,
  //     "min_level": !evoDetails ? 1 : evoDetails.min_level,
  //     "trigger_name": !evoDetails ? null : evoDetails.trigger.name,
  //     "item": !evoDetails ? null : evoDetails.item
  //   });

  //   evoData = evoData['evolves_to'][0];
  // } while (!!evoData && evoData.hasOwnProperty('evolves_to'));
</script>

<template>

</template>