<script setup>
defineProps({
  icon: {
    type: String,
    required: true
  },
  href: {
    type: String,
    default: '#'
  }
})
</script>

<template>
  <li class="list-inline-item">
    <a :href="href">
      <i class="fa" :class="`fa-${icon}`"></i>
    </a>
  </li>
</template>
