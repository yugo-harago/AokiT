<script setup>
import { onMounted } from 'vue'
import treeImage from '../../assets/img/Planet/Tree.jpg'

onMounted(() => {
  // Signal compatibility with AboutSection expecting Planet to be ready
  window.isPlanetReady = true
  window.dispatchEvent(new Event('planet-ready'))
})
</script>

<template>
  <div class="service-mobile">
    <div class="header-section">
      <div class="subtitle">SERVICES</div>
      <h2 class="main-title"><span class="highlight">GLOBAL</span> HUB</h2>
      <p class="description">Creating smooth pathways for global exchange and human resources.</p>
    </div>

    <div class="image-section">
      <img :src="treeImage" alt="Nature path" class="hero-image" />
      <div class="fade-overlay"></div>
    </div>

    <div class="services-list">
      <!-- Restaurant Business -->
      <div class="service-item">
        <div class="icon-wrapper">
          <i class="fa fa-cutlery icon" aria-hidden="true"></i>
        </div>
        <div class="content">
          <h3>RESTAURANT BUSINESS</h3>
          <p>Bringing the essence of Japan to local communities through authentic culinary experiences.</p>
        </div>
      </div>

      <!-- Divider -->
      <div class="divider-container">
        <svg class="wavy-divider" viewBox="0 0 1200 100" preserveAspectRatio="none">
          <path d="M0,50 C300,80 600,20 1200,50" fill="none" stroke="#ccc" stroke-width="2" vector-effect="non-scaling-stroke"/>
        </svg>
      </div>

      <!-- Import & Export -->
      <div class="service-item">
        <div class="icon-wrapper">
          <i class="fa fa-globe icon" aria-hidden="true"></i>
        </div>
        <div class="content">
          <h3>IMPORT & EXPORT</h3>
          <p>Facilitating the exchange of food, culture, and products between Japan and the world.</p>
        </div>
      </div>

      <!-- Divider -->
      <div class="divider-container">
        <svg class="wavy-divider" viewBox="0 0 1200 100" preserveAspectRatio="none">
          <path d="M0,50 C300,80 600,20 1200,50" fill="none" stroke="#ccc" stroke-width="2" vector-effect="non-scaling-stroke"/>
        </svg>
      </div>

      <!-- Human Resources -->
      <div class="service-item">
        <div class="icon-wrapper">
          <i class="fa fa-handshake-o icon" aria-hidden="true"></i>
        </div>
        <div class="content">
          <h3>HUMAN RESOURCES</h3>
          <p>Connecting talented individuals with opportunities across borders and industries.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');

.service-mobile {
  font-family: 'Montserrat', sans-serif;
  background-color: #fff;
  color: #333;
  width: 100%;
  padding-bottom: 4rem;
  overflow-x: hidden;
}

.header-section {
  text-align: center;
  padding: 4rem 1.5rem 1rem;
}

.subtitle {
  font-size: 0.9rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #333;
  margin-bottom: 0.5rem;
}

.main-title {
  font-size: 2.5rem;
  font-weight: 400;
  margin: 0;
  line-height: 1.2;
}

.highlight {
  color: #2FBB49;
  font-weight: 500;
}

.description {
  margin-top: 1rem;
  font-size: 1rem;
  color: #666;
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.5;
}

.image-section {
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.fade-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50%;
  background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 90%);
}

.services-list {
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.service-item {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  padding: 1.5rem 0;
}

.icon-wrapper {
  flex-shrink: 0;
  width: 50px;
  display: flex;
  justify-content: center;
  padding-top: 0.25rem;
}

.icon {
  font-size: 2.5rem;
  color: #2FBB49; /* Green color for icons */
  font-weight: 300; /* Try to make them lighter if possible, though FA4 is solid */
}

.content {
  flex-grow: 1;
}

.content h3 {
  font-size: 1.25rem;
  font-weight: 500;
  margin: 0 0 0.5rem;
  text-transform: uppercase;
  color: #222;
}

.content p {
  font-size: 0.95rem;
  line-height: 1.5;
  color: #444;
  margin: 0;
}

.divider-container {
  width: 100%;
  height: 30px;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.wavy-divider {
  width: 100%;
  height: 100%;
}

/* Responsive adjustments */
@media (min-width: 768px) {
  .header-section {
    padding: 5rem 2rem 2rem;
  }
  
  .main-title {
    font-size: 3.5rem;
  }
  
  .description {
    font-size: 1.1rem;
  }
  
  .image-section {
    height: 400px;
  }
  
  .services-list {
    max-width: 700px;
    margin: 0 auto;
  }
}
</style>
