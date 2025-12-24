<script setup>
import NavLink from '../atoms/NavLink.vue'

defineProps({
  items: {
    type: Array,
    required: true,
    // Expected structure: [{ href: '#services', label: 'Services' }, ...]
  }
})
</script>

<template>
  <ul class="navbar-nav ms-auto text-uppercase">
    <NavLink 
      v-for="(item, index) in items" 
      :key="index"
      :href="item.href"
      :label="item.label"
    />
  </ul>
</template>
