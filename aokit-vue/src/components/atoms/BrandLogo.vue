<script setup>
defineProps({
  href: {
    type: String,
    default: '#page-top'
  },
  label: {
    type: String,
    default: 'AokiT'
  }
})
</script>

<template>
  <a class="navbar-brand" :href="href">{{ label }}</a>
</template>

<style>
#mainNav .navbar-brand {
  font-family: 'Alfa Slab One', cursive;
}
</style>
