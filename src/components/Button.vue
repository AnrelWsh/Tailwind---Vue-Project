<script setup>
import { ref } from 'vue'

defineProps(['text'])

</script>

<template>
  <button class="font-main_font rounded-full h-14 py-3 px-4 text-base font-semibold">{{ text }}</button>
</template>

<style scoped>

</style>