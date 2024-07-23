<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <aside class="flex flex-col bg-secondary-950 w-[72px] min-w-[72px] max-w-[72px]">
    <ul class="flex flex-col items-center pt-2">
      <HomeButton active="true" />

      <li class="my-1">
        <hr>
      </li>

      <HomeButton />
      <HomeButton />
    </ul>
  </aside>
</template>

<script setup>
  import HomeButton from "./Buttons/HomeButton.vue";
</script>