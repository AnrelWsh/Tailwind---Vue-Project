<script setup>
import { ref } from 'vue'

defineProps(['link1','link2','link3','link4'])
</script>

<template>
   <ul class="gap-6 flex">
        <a class="font-main_font"> {{ link1 }} </a>
        <a class="font-bold"> {{ link2 }} </a>
        <a class="font-main_font"> {{ link3 }} </a>
        <a class="font-main_font"> {{ link4 }} </a>
   </ul>
</template>
<style scoped>
   
</style>