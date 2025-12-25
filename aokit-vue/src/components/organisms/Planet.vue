<script>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import planetVideo from '../../assets/video/PlanetRotating_and_zoom.mp4'
import treeImage from '../../assets/img/Planet/Tree.jpg'
import Hero from './Hero.vue'

gsap.registerPlugin(ScrollTrigger)

export default {
  name: 'Planet',
  components: {
    Hero
  },
  data() {
    return {
      planetVideo,
      treeImage,
      isInitialized: false
    }
  },
  created() {
    this.timeline = null
  },
  mounted() {
    const video = this.$refs.videoRef
    if (video) {
      if (video.readyState >= 1) {
        this.initScrollAnimation()
      } else {
        video.addEventListener('loadedmetadata', this.initScrollAnimation)
      }
    }
  },
  beforeUnmount() {
    if (this.timeline) this.timeline.kill()
    const video = this.$refs.videoRef
    if (video) {
        video.removeEventListener('loadedmetadata', this.initScrollAnimation)
    }
  },
  methods: {
    initScrollAnimation() {
      if (this.isInitialized) return
      
      const video = this.$refs.videoRef
      const container = this.$refs.containerRef
      const overlay = this.$refs.overlayRef
      const text = this.$refs.textRef
      
      const servicesTitle = this.$refs.servicesTitleRef
      const globalHub = this.$refs.globalHubRef
      const restaurant = this.$refs.restaurantRef
      const importExport = this.$refs.importExportRef
      
      const treeOverlay = this.$refs.treeOverlayRef
      const finalSlogan = this.$refs.finalSloganRef
      
      if (!video || !container || !video.duration) {
          console.warn('Planet animation missing refs or video duration')
          return 
      }

      this.isInitialized = true
      
      video.pause()
      video.currentTime = 0
      
      this.timeline = gsap.timeline({
        scrollTrigger: {
            trigger: container,
            start: 'top top',
            end: '+=2500%', // Increased scroll distance slightly for smoother feel
            pin: true,
            scrub: 1, // Increased scrub smoothing
            markers: false, 
            onRefresh: () => video.pause()
        }
      })

      // --- SEQUENCE START ---
      const videoDur = video.duration

      // 1. INTRO
      this.timeline.addLabel("intro")
      // Video starts moving immediately
      this.timeline.to(video, { currentTime: videoDur * 0.15, duration: 4, ease: "none" }, "intro")
      // Overlays fade out while video moves
      this.timeline.to([overlay, text], { opacity: 0, duration: 2, ease: "none" }, "intro")

      // 2. SERVICES TITLE
      this.timeline.addLabel("services")
      this.timeline.to(video, { currentTime: videoDur * 0.20, duration: 4, ease: "none" }, "services")
      this.timeline.to(servicesTitle, { opacity: 1, duration: 1, ease: "none" }, "services")
      this.timeline.to(servicesTitle, { opacity: 0, duration: 1, ease: "none" }, "services+=3")

      // 3. GLOBAL HUB
      this.timeline.addLabel("globalHub")
      this.timeline.to(video, { currentTime: videoDur * 0.35, duration: 6, ease: "none" }, "globalHub")
      this.timeline.to(globalHub, { opacity: 1, duration: 1, ease: "none" }, "globalHub")
      this.timeline.to(globalHub, { opacity: 0, duration: 1, ease: "none" }, "globalHub+=5")

      // 4. GAP (No text, just video movement)
      this.timeline.addLabel("gap")
      this.timeline.to(video, { currentTime: videoDur * 0.42, duration: 3, ease: "none" }, "gap")

      // 5. RESTAURANT BUSINESS
      this.timeline.addLabel("restaurant")
      this.timeline.to(video, { currentTime: videoDur * 0.55, duration: 6, ease: "none" }, "restaurant")
      this.timeline.to(restaurant, { opacity: 1, duration: 1, ease: "none" }, "restaurant")
      this.timeline.to(restaurant, { opacity: 0, duration: 1, ease: "none" }, "restaurant+=5")

      // 6. IMPORT & EXPORT
      this.timeline.addLabel("importExport")
      this.timeline.to(video, { currentTime: videoDur * 0.75, duration: 6, ease: "none" }, "importExport")
      this.timeline.to(importExport, { opacity: 1, duration: 1, ease: "none" }, "importExport")
      this.timeline.to(importExport, { opacity: 0, duration: 1, ease: "none" }, "importExport+=5")

      // 7. FINISH VIDEO to TREE & SHOW TREE IMAGE
      this.timeline.addLabel("finish")
      this.timeline.to(video, { currentTime: videoDur - 0.1, duration: 4, ease: "none" }, "finish")
      // Fade in Tree Image at the end of the video movement
      this.timeline.to(treeOverlay, { opacity: 1, duration: 1, ease: "none" }, "finish+=3")

      // 8. SHOW FINAL SLOGAN
      this.timeline.addLabel("slogan")
      this.timeline.to(finalSlogan, { opacity: 1, y: 0, duration: 2, ease: "power2.out" }, "slogan")
      
      // Hold for a moment
      this.timeline.to({}, { duration: 2 })

      ScrollTrigger.refresh()
    }
  }
}
</script>

<template>
  <div ref="containerRef" class="planet-container">
    <div ref="overlayRef" class="overlay"></div>
    <div ref="textRef" class="intro-text">AokiT Inc.</div>
    
    <!-- Services Title -->
    <div ref="servicesTitleRef" class="info-card services-title">
      <h2>Services</h2>
    </div>

    <!-- Global Hub -->
    <div ref="globalHubRef" class="info-card">
      <h3 class="card-title">Global Hub</h3>
      <p class="card-desc">Creating smooth pathways for global exchange and human resources.</p>
    </div>

    <!-- Restaurant -->
    <div ref="restaurantRef" class="info-card">
      <h3 class="card-title">Restaurant Business</h3>
      <p class="card-desc">Bringing the essence of Japan to local communities through authentic culinary experiences.</p>
    </div>

    <!-- Import & Export -->
    <div ref="importExportRef" class="info-card">
      <h3 class="card-title">Import & Export</h3>
      <p class="card-desc">Facilitating the exchange of food, culture, and products between Japan and the world.</p>
    </div>

    <!-- Tree Image Overlay -->
    <div ref="treeOverlayRef" class="tree-overlay" :style="{ backgroundImage: `url(${treeImage})` }"></div>

    <!-- Final Slogan -->
    <div ref="finalSloganRef" class="final-slogan">
      <Hero />
    </div>

    <video 
      ref="videoRef"
      class="planet-video"
      :src="planetVideo"
      muted
      playsinline
      preload="auto"
    ></video>
  </div>
</template>

<style scoped>
.planet-container {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
  background-color: #000;
}

.planet-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

/* Overlays */
.overlay {
  position: absolute;
  inset: 0;
  background-color: black;
  z-index: 10;
  pointer-events: none;
}

.intro-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 4rem;
  font-weight: 900;
  z-index: 11;
  pointer-events: none;
  text-transform: uppercase;
  letter-spacing: 2px;
}

/* Info Cards */
.info-card {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
  opacity: 0;
  text-align: center;
  color: white;
  text-shadow: 0 2px 10px rgba(0,0,0,0.8);
  width: 80%;
  max-width: 600px;
  pointer-events: none;
}

.services-title h2 {
    font-size: 5rem;
    font-weight: 700;
    text-transform: uppercase;
    color: #ffffff;
}

.card-title {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1rem;
    text-transform: uppercase;
}

.card-desc {
    font-size: 1.5rem;
    font-weight: 300;
    line-height: 1.4;
}

/* Tree Image Overlay */
.tree-overlay {
    position: absolute;
    inset: 0;
    background-size: cover;
    background-position: center;
    z-index: 2; /* Above video */
    opacity: 0;
    pointer-events: none;
}

/* Final Slogan */
.final-slogan {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); /* Clean center */
    width: 100%;
    text-align: center;
    z-index: 20;
    opacity: 0;
    pointer-events: none;
}

.final-slogan span {
    color: white;
    font-size: 3.5rem;
    font-weight: bold;
    font-family: 'Alfa Slab One', cursive; /* Matching Hero style */
    text-transform: uppercase;
    text-shadow: 0 4px 20px rgba(0,0,0,0.9);
}
</style>