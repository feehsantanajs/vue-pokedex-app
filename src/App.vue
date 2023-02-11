


<template>
 
  <main class="flex flex-col items-center pt-10 bg-gray-900 h-screen w-screen ">
    
      <div class="w-96 text-center">
        <router-link to="/">Home</router-link> | 
        <router-link to="/pokemon">Pokemon</router-link>
      </div>
  
   
    <div class="flex items-center justify-center h-[100%] w-[100%]">
      <router-view />
    </div>
  </main>
</template>
