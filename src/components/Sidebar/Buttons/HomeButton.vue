<template>
  <li class="flex group relative items-center">
    <span
      class="absolute rounded-2xl transition-all duration-200 ease-in bg-white left-[-14px]"
      :class="{ 'left-[-14px] w-[6px] h-[40px] group-hover:h-[40px]': active, 'h-[0px] w-[0px] group-hover:h-[18px] group-hover:w-[6px]': ! active }"
    />

    <button 
      class="w-[50px] h-[50px] mx-auto text-secondary-100 border-0 rounded-3xl my-1 transition-all ease-in delay-75 duration-100 hover:bg-primary-500 hover:rounded-2xl hover:text-white"
      :class="{ 'bg-primary-500 rounded-2xl text-white': active, 'bg-secondary-800': ! active }"
    >
      <span>H</span>
    </button>
  </li>
</template>

<script setup>
  defineProps({
    active: {
      type: Boolean,
      default: false
    }
  });
</script>