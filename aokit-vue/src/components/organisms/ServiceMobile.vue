<script setup>
import { onMounted } from 'vue'
import treeImage from '../../assets/img/Planet/Tree.jpg'
import Hero from './Hero.vue'

onMounted(() => {
  // Signal compatibility with AboutSection expecting Planet to be ready
  window.isPlanetReady = true
  window.dispatchEvent(new Event('planet-ready'))
})
</script>

<template>
  <div class="service-mobile">
    <!-- Hero Section -->
    <div class="hero-section">
      <h1 class="main-title">AokiT Inc.</h1>
      <p class="subtitle">Connecting Japan and the World</p>
    </div>

    <!-- Services List -->
    <div ref="servicesList" class="services-list" id="services">
      <div class="service-header">
        <h2>Services</h2>
      </div>

      <div class="service-item">
        <h3>Global Hub</h3>
        <p>Creating smooth pathways for global exchange and human resources.</p>
      </div>

      <div class="service-item">
        <h3>Restaurant Business</h3>
        <p>Bringing the essence of Japan to local communities through authentic culinary experiences.</p>
      </div>

      <div class="service-item">
        <h3>Import & Export</h3>
        <p>Facilitating the exchange of food, culture, and products between Japan and the world.</p>
      </div>
    </div>

    <!-- Tree Image Section -->
    <div class="tree-section" :style="{ backgroundImage: `url(${treeImage})` }">
       <div class="overlay"></div>
       <div class="final-slogan">
          <Hero />
       </div>
    </div>
  </div>
</template>

<style scoped>
.service-mobile {
  background-color: #000;
  color: #fff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-bottom: 0;
}

.hero-section {
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
  background: linear-gradient(to bottom, #000000, #1a1a1a);
}

.main-title {
  font-size: 3rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1.2rem;
  opacity: 0.8;
}

.services-list {
  padding: 4rem 2rem;
  background-color: #0d0d0d;
}

.service-header {
  text-align: center;
  margin-bottom: 3rem;
}

.service-header h2 {
  font-size: 3rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #fff;
  border-bottom: 2px solid #333;
  display: inline-block;
  padding-bottom: 0.5rem;
}

.service-item {
  margin-bottom: 3rem;
  text-align: center;
}

.service-item h3 {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #4CAF50; /* Green accent matching loading bar */
  text-transform: uppercase;
}

.service-item p {
  font-size: 1.1rem;
  line-height: 1.6;
  opacity: 0.9;
  max-width: 500px;
  margin: 0 auto;
}

.tree-section {
  position: relative;
  height: 60vh;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
}

.final-slogan {
  position: relative;
  z-index: 2;
  width: 100%;
}
</style>
