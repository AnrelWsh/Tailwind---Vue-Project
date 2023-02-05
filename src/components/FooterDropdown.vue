<script setup>
  defineProps(['dropdownTitle'])
</script>

<template>
  <div class=" bg-footer-dropdown-grey flex flex-row items-center justify-between my-2 p-4">
    <p class="text-base uppercase leading-[22px] font-semibold text-white">{{ dropdownTitle }}</p>
    <img src="../../public/img/arrow-down.png" alt="">
  </div>
</template>
