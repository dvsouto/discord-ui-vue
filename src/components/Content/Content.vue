<template>
  <section class="flex flex-col w-full h-screen">
    <Topbar />
    <div class="flex flex-col flex-1 bg-secondary-900 p-1 justify-center items-center text-center">
      <img
        src="/img/disponivel.png"
        alt=""
      >
      <div class="text-secondary-300 font-light text-md">
        Ninguém por perto para brincar com o Wumpus.
      </div>
    </div>
  </section>
</template>

<script setup>
  import Topbar from "./Topbar/Topbar.vue";
</script>