<script>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import planetVideo from '../../assets/video/PlanetRotating_and_zoom.mp4'

gsap.registerPlugin(ScrollTrigger)

export default {
  name: 'Planet',
  data() {
    return {
      planetVideo,
      isInitialized: false
    }
  },
  created() {
    this.timeline = null // Initialize as non-reactive property
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
      const globalHub = this.$refs.globalHubRef
      
      // Ensure we have everything we need
      if (!video || !container || !video.duration) {
          console.warn('Planet animation missing refs or video duration', { video, container, duration: video?.duration })
          return 
      }

      this.isInitialized = true
      
      // Initial state setup
      video.pause()
      video.currentTime = 0
      
      // Create timeline
      this.timeline = gsap.timeline({
        scrollTrigger: {
            trigger: container,
            start: 'top top',
            end: '+=800%', // Increased distance heavily to allow time for pause
            pin: true,
            scrub: 1,
            markers: false, 
            onRefresh: () => video.pause()
        }
      })

      // 1. INTRO: Overlay & Text Fade Out
      if (overlay) {
          this.timeline.to(overlay, { opacity: 0, duration: 2, ease: "none" })
      }
      if (text) {
          this.timeline.to(text, { opacity: 0, duration: 2, ease: "none" }, "<")
      }

      // 2. PHASE 1: Scrub video to 30%
      const phase1Time = video.duration * 0.3
      const phase2Time = video.duration * 0.35 // Move to 35% during the "slow" phase
      
      this.timeline.to(video, {
          currentTime: phase1Time,
          duration: 2.0, 
          ease: "none"
      })

      // 3. PHASE 2: SLOW MOTION & SHOW INFO
      if (globalHub) {
          // Fade In Info
          this.timeline.to(globalHub, { opacity: 1, duration: 1, ease: 'none'})
          
          // Slow Motion Video (scrub from 30% to 45% over a long duration)
          // Run concurrently with the Info Card being visible
          this.timeline.to(video, {
              currentTime: phase2Time,
              duration: 5, // Long duration for short video segment = slow motion
              ease: "none"
          }, "<")
          
          // Fade Out Info
          this.timeline.to(globalHub, { opacity: 0, duration: 1, ease: 'none'})
      } else {
          // Fallback if no globalHub ref (shouldn't happen but good safety)
          this.timeline.to(video, {
              currentTime: phase2Time,
              duration: 5,
              ease: "none"
          })
      }

      // 4. PHASE 3: Resume video scrubbing to end
      this.timeline.to(video, {
          currentTime: video.duration,
          duration: 4, // Remaining duration speed up again
          ease: "none"
      })
      
      ScrollTrigger.refresh()
    }
  }
}
</script>

<template>
  <div ref="containerRef" class="planet-container">
    <div ref="overlayRef" class="overlay"></div>
    <div ref="textRef" class="intro-text">AokiT Inc.</div>
    
    <!-- Global Hub Info Card -->
    <div ref="globalHubRef" class="global-hub-info">
      <div class="text-center">
        <h4 class="section-heading">Global Hub</h4>
        <p class="text-muted">Creating smooth pathways for global exchange and human resources.</p>
      </div>
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
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  position: relative;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    z-index: 2; 
    opacity: 1; 
    pointer-events: none;
}

.intro-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 3rem;
    font-weight: bold;
    z-index: 3;
    pointer-events: none;
    opacity: 1;
}

.global-hub-info {
    position: absolute;
    top: 50%;
    left: 50%;
    color: white;
    transform: translate(-50%, -50%);
    z-index: 4; /* Higher than text/overlay */
    opacity: 0; /* Hidden by default */
    background: rgba(36, 36, 36, 0.507);
    padding: 2rem;
    width: 100%;
    box-shadow: 0 0 10px rgba(9, 4, 4, 0.51);
    pointer-events: none;
}
.global-hub-info .text-muted {
    color: #c7d5e0 !important;
}
.global-hub-info .section-heading {
    text-transform: uppercase;
    font-weight: 700;
    margin-top: 15px;
    margin-bottom: 10px;
    color: #e7e7e7;
}
.global-hub-info .text-primary {
    color: #fed136 !important;
}

.planet-video {
  width: 100%;
  height: 100%;
  object-fit:cover;
  z-index: 1;
}
</style>