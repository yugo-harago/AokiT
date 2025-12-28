<script setup>
import { onMounted, onUnmounted, ref, nextTick } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

// Import images
import imgAustin from '../../assets/img/slider/1_austin.jpg'
import imgSunrise from '../../assets/img/slider/2_sunrise.png'
import imgConnection from '../../assets/img/slider/3_connection.png'
import imgPositioning from '../../assets/img/slider/4_positioning.png'
import imgMountains from '../../assets/img/slider/5_mountains.png'

const aboutSection = ref(null)

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)

  // Delay initialization slightly to ensure previous sections (Planet) have settled
  const timer = setTimeout(() => {
     const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: aboutSection.value,
          pin: true,
          scrub: 1,
          start: 'top top',
          end: '+=5000', 
          invalidateOnRefresh: true, // Recalculate on resize/refresh
          fastScrollEnd: true,
        }
      })

      // Panel 2 (Established) - Enters from BOTTOM
      tl.fromTo('.panel-established', 
        { yPercent: 100 }, 
        { yPercent: 0, duration: 1, ease: 'none' }
      )
      .fromTo('.text-established', 
        { opacity: 0, y: 50 }, 
        { opacity: 1, y: 0, duration: 0.5 }, 
        '>-0.5' 
      )

      // Panel 3 (Mission) - Enters from BOTTOM
      tl.fromTo('.panel-mission', 
        { yPercent: 100 }, 
        { yPercent: 0, duration: 1, ease: 'none' }
      )
      .fromTo('.text-mission', 
        { opacity: 0, y: 50 }, 
        { opacity: 1, y: 0, duration: 0.5 }, 
        '>-0.5'
      )

      // Panel 4 (Positioning) - Enters from BOTTOM
      tl.fromTo('.panel-positioning', 
        { yPercent: 100 }, 
        { yPercent: 0, duration: 1, ease: 'none' }
      )
      .fromTo('.text-positioning', 
        { opacity: 0, y: 50 }, 
        { opacity: 1, y: 0, duration: 0.5 }, 
        '>-0.5'
      )

      // Panel 5 (Mountains/Future) - Enters from BOTTOM
      tl.fromTo('.panel-future', 
        { yPercent: 100 }, 
        { yPercent: 0, duration: 1, ease: 'none' }
      )
      .fromTo('.text-future', 
        { opacity: 0, y: 50 }, 
        { opacity: 1, y: 0, duration: 0.5 }, 
        '>-0.5'
      )

    }, aboutSection.value) 
    
    // Force a refresh after satisfying the timeline
    ScrollTrigger.refresh()
    
    // Cleanup 
    onUnmounted(() => {
      ctx.revert()
      clearTimeout(timer)
    })
  }, 500) // 500ms delay to allow Planet.vue video metadata to load and expand layout
})
</script>

<template>
  <section ref="aboutSection" id="about" class="about-section">
    <div class="about-container">
      
      <!-- Panel 1: Intro (Base Layer) -->
      <div class="panel panel-intro" :style="{ backgroundImage: `url(${imgAustin})` }">
        <div class="content-overlay">
          <h2 class="section-title">About</h2>
          <p class="section-text">Bringing the essence of Japan and new value to local communities.</p>
        </div>
      </div>

      <!-- Panel 2: Established -->
      <div class="panel panel-established" :style="{ backgroundImage: `url(${imgSunrise})` }">
        <div class="content-overlay text-established">
          <h2 class="section-title">Established</h2>
          <p class="section-text">AokiT Inc. was founded in Austin, Texas, to serve as an international hub connecting Japan and the world.</p>
        </div>
      </div>

      <!-- Panel 3: Mission -->
      <div class="panel panel-mission" :style="{ backgroundImage: `url(${imgConnection})` }">
        <div class="content-overlay text-mission">
          <h2 class="section-title">Our Mission</h2>
          <p class="section-text">We facilitate the exchange of food, culture, products, and human resources, bringing the essence of Japan and new value to local communities.</p>
        </div>
      </div>

      <!-- Panel 4: Positioning -->
      <div class="panel panel-positioning" :style="{ backgroundImage: `url(${imgPositioning})` }">
        <div class="content-overlay text-positioning">
          <h2 class="section-title">Our Positioning</h2>
          <p class="section-text">With strong connections to Japan and cross-border business expertise, we prioritize human networks and respect for Japanese food culture.</p>
        </div>
      </div>

      <!-- Panel 5: Future -->
      <div class="panel panel-future" :style="{ backgroundImage: `url(${imgMountains})` }">
        <div class="content-overlay text-future">
          <h2 class="section-title">Future</h2>
          <p class="section-text">We continue to create smooth pathways for global exchange, leveraging our expertise in real estate, insurance, and import/export operations.</p>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.about-section {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  margin: 0; 
  padding: 0;
}

.about-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.panel {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  /* Ensure panels stack correctly if not moved */
  z-index: 1; 
}

/* Base layer should be at bottom */
.panel-intro {
  z-index: 1;
}
.panel-established {
  z-index: 2;
}
.panel-mission {
  z-index: 3;
}
.panel-positioning {
  z-index: 4;
}
.panel-future {
  z-index: 5;
}

.content-overlay {
  /* Removed background box */
  padding: 2rem;
  text-align: center;
  color: white;
  max-width: 800px;
  margin: 0 1rem;
  /* Added text shadow for legibility */
  text-shadow: 0 4px 20px rgba(0,0,0,0.8);
}

.section-title {
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 700;
  text-transform: uppercase;
}

.section-text {
  font-size: 1.5rem;
  line-height: 1.6;
}
</style>
