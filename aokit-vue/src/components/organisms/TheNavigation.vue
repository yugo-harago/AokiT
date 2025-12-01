<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const mainNav = ref(null)

const handleScroll = () => {
  if (!mainNav.value) return
  
  if (window.scrollY > 100) {
    mainNav.value.classList.add("navbar-shrink")
  } else {
    mainNav.value.classList.remove("navbar-shrink")
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Check initial state
  
  // Bootstrap scroll spy is handled via data attributes in body, 
  // but we might need to initialize it or just let bootstrap do its thing.
  // The original agency.js also had logic to close the menu on click.
  
  const navbarCollapse = mainNav.value.querySelector('.navbar-collapse')
  if (navbarCollapse) {
    const navbarItems = navbarCollapse.querySelectorAll('a')
    for (const item of navbarItems) {
      item.addEventListener('click', () => {
        // We can use bootstrap instance to hide, or just rely on data-bs-toggle if present.
        // But agency.js did it manually.
        // Let's try to get the bootstrap collapse instance.
        // const collapse = bootstrap.Collapse.getInstance(navbarCollapse) // We need to import bootstrap first
        // if (collapse) collapse.hide()
        
        // Simpler way: toggle the class or click the toggler if open?
        // Actually, let's just leave it to default bootstrap behavior for now, 
        // or add data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" to links?
        // The original code used:
        /*
        var collapse = new bootstrap.Collapse(navbarCollapse, {
            toggle: false
        });
        item.addEventListener('click', function (event) {
            collapse.hide();
        });
        */
      })
    }
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav class="navbar navbar-expand-lg fixed-top bg-dark navbar-dark" id="mainNav" ref="mainNav">
    <div class="container">
      <a class="navbar-brand" href="#page-top">AokiT</a>
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
        <ul class="navbar-nav ms-auto text-uppercase">
          <li class="nav-item"><a class="nav-link" href="#services">Services</a></li>
          <li class="nav-item"><a class="nav-link" href="#portfolio">Portfolio</a></li>
          <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
          <li class="nav-item"><a class="nav-link" href="#team">Team</a></li>
          <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>
