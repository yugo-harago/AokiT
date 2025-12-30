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

  // Function to initialize GSAP
  const initGsapFromPlanet = () => {
     const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: aboutSection.value,
          pin: true,
          scrub: 1,
          start: 'top top',
          end: '+=8000', // Increased total scroll distance to accommodate pauses
          invalidateOnRefresh: true, // Recalculate on resize/refresh
          fastScrollEnd: true,
        }
      })
      
      // PAUSE for Intro
      tl.to({}, { duration: 1 }) 

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
      .to({}, { duration: 1 }) // PAUSE

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
      .to({}, { duration: 1 }) // PAUSE

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
      .to({}, { duration: 1 }) // PAUSE

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
      .to({}, { duration: 1 }) // PAUSE at end

    }, aboutSection.value) 
    
    // Force a refresh after satisfying the timeline
    ScrollTrigger.refresh()

    onUnmounted(() => {
      ctx.revert()
    })
  }

  // --- Coordination Logic ---
  const handlePlanetReady = () => {
      console.log('AboutSection: Planet is ready, initializing...')
      initGsapFromPlanet()
      // Remove listener to avoid double init
      window.removeEventListener('planet-ready', handlePlanetReady)
  }

  // 1. Check if already ready
  if (window.isPlanetReady) {
      initGsapFromPlanet()
  } else {
      // 2. Wait for event
      window.addEventListener('planet-ready', handlePlanetReady)
      
      // 3. Fallback: If event never comes (e.g. video fails), init anyway after 5s
      setTimeout(() => {
          if (!ScrollTrigger.getById("about")) { // check if not already created (pseudo-check)
              // We don't have an ID on the scrolltrigger above, but we can just check if we ran
              // Actually, simply relying on the event listener removal is safer if we track state, but simple timeout is fine.
              // Let's just blindly run if it hasn't run.
              // For safety, we can check a ref or just remove the listener.
              window.removeEventListener('planet-ready', handlePlanetReady)
              // Only init if we haven't already (GSAP context check would be ideal but simple is better)
              // We'll rely on the fact that if Planet fails, this runs. If Planet succeeds later, we might have double init?
              // Let's use a flag.
          }
      }, 5000)
  }
  
  // Refined Fallback with flag
  const isInitialized = ref(false)
  const safeInit = () => {
      if (isInitialized.value) return
      isInitialized.value = true
      initGsapFromPlanet()
  }

  if (window.isPlanetReady) {
      safeInit()
  } else {
      const onReady = () => {
          safeInit()
          window.removeEventListener('planet-ready', onReady)
      }
      window.addEventListener('planet-ready', onReady)
      
      // Fallback 4s
      setTimeout(() => {
          if (!isInitialized.value) {
              console.warn('AboutSection: Planet ready timeout, forcing init')
              onReady()
          }
      }, 4000)
  }
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
  /* Added background for better readability */
  background-color: rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 30px 30px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

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
