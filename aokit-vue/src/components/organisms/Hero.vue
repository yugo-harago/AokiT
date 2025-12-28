<template>
  <div class="hero-content">
    <div class="intro-text">
      <div class="intro-lead-in"><span>Connecting Japan and the World</span></div>
      <div class="intro-heading"><span>AokiT Inc.</span></div>
    </div>
  </div>
</template>

<style scoped>
.hero-content {
  text-align: center;
  color: white;
}

.intro-lead-in {
  font-size: 1.5rem;
  font-style: italic;
  line-height: 1.5;
  margin-bottom: 25px;
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}

.intro-heading {
  font-size: 3.25rem;
  line-height: 1.2;
  margin-bottom: 25px;
  font-family: 'Alfa Slab One', cursive;
  text-transform: uppercase;
}

@media (min-width: 768px) {
  .intro-lead-in {
    font-size: 2.5rem; /* 40px */
      margin-bottom: 25px;
  }
  
  .intro-heading {
    font-size: 4.7rem; /* 75px */
    margin-bottom: 50px;
  }
}
</style>
