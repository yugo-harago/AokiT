<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="text-center">
    <h2 class="text-uppercase section-heading">{{ title }}</h2>
    <h3 v-if="subtitle" class="text-muted section-subheading">{{ subtitle }}</h3>
  </div>
</template>
