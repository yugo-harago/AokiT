<script setup>
defineProps({
  href: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  }
})
</script>

<template>
  <li class="nav-item">
    <a class="nav-link" :href="href">{{ label }}</a>
  </li>
</template>
