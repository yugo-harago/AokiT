<script setup>
import TheNavigation from '../organisms/TheNavigation.vue'
import TheFooter from '../organisms/TheFooter.vue'
</script>

<template>
  <TheNavigation />
  <slot></slot>
  <TheFooter />
</template>
