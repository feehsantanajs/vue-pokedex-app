<script setup lang="ts">

</script>

<template>
  <main class="flex bg-gray-900 h-screen w-screen items-center justify-center font-">
    <div class="w-[100%] h-52 flex justify-center items-center max-w-lg p-4 rounded-md bg-gray-800">
      <form class="space-x-4">
        <input placeholder="Procurar" type="text" name="search" class="py-1 px-2 text-gray-900 rounded">
        <button @click.exac class="px-6 py-1 bg-yellow-600  font-bold shadow-lg shadow-slate-900/40 rounded ease-out duration-300  hover:bg-red-800"> Procurar</button>
      </form>
    </div>
  </main>
</template>
