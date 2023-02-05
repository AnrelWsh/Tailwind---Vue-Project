<script setup>
  import CardPetitBonhomme from "./CardPetitBonhomme.vue";
  defineProps(['cardImg', 'theme', 'title', 'items'])
</script>

<template>
  <div class="card mb-[30px] sm:w-[297px] sm:bg-contain">
    <div class="w-full sm:h-[190px] h-[265px] bg-cover" :style="{ 'background-image': 'url(' + cardImg + ')' }"></div>
    <div class="cardText p-4">
      <p class="text-[10px] leading-[18px] uppercase text-dark">{{ theme }}</p>
      <p class="text-base leading-[22px] font-semibold text-dark">{{ title }}</p>
      <div class="cardBonhomme mt-3">
        <CardPetitBonhomme v-for="item in items"/>
      </div>
    </div>
  </div>
</template>
