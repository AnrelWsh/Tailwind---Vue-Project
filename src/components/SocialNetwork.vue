<script setup>
import { ref } from 'vue';
 defineProps(['imageNetwork'])
</script>

<template>
   <div class="p-1.5 bg-grey rounded-full">
      <div class="w-4 h-4 bg-contain bg-no-repeat bg-center" :style="{ 'background-image': 'url(' + imageNetwork + ')' }"></div>
   </div>
</template>
<style scoped>
   
</style>