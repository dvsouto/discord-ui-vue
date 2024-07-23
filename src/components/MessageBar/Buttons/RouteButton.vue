<template>
  <li
    class="m-1 p-1 rounded-sm hover:bg-secondary-600"
    :class="{ 'bg-secondary-700': active }"
  >
    <button class="w-100 h-100">
      <slot />
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