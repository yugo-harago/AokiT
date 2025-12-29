<script setup>
import logoImg from '../../assets/img/logo/5152858__.png'

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
  <a class="navbar-brand d-flex align-items-center" :href="href">
    <img :src="logoImg" alt="Logo" class="me-2" style="height: 30px;" />
    {{ label }}
  </a>
</template>

<style>
#mainNav .navbar-brand {
  font-family: 'Alfa Slab One', cursive;
  display: flex;
  align-items: center;
}
</style>
