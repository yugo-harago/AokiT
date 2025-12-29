<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import BrandLogo from '../atoms/BrandLogo.vue'
import NavList from '../molecules/NavList.vue'

const mainNav = ref(null)

const navItems = [
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#team', label: 'Team' },
  { href: '#contact', label: 'Contact' },
]

onMounted(() => {
  const navbarCollapse = mainNav.value.querySelector('.navbar-collapse')
  if (navbarCollapse) {
    const navbarItems = navbarCollapse.querySelectorAll('a')
    for (const item of navbarItems) {
      item.addEventListener('click', () => {
        // Simple way: if bootstrap is loaded, it should handle the collapse 
        // if we use data-bs-toggle and data-bs-target as we do in the toggler.
        // For auto-closing on click, we might need bootstrap JS logic.
      })
    }
  }
})
</script>

<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-dark navbar-shrink" id="mainNav" ref="mainNav">
    <div class="container">
      <BrandLogo />
      <button 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarResponsive" 
        class="navbar-toggler" 
        type="button" 
        aria-controls="navbarResponsive" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
      >
        <i class="fa fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <NavList :items="navItems" />
      </div>
    </div>
  </nav>
</template>
