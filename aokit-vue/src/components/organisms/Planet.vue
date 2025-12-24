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
      trigger: null
    }
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
    if (this.trigger) this.trigger.kill()
    
    const video = this.$refs.videoRef
    if (video) {
        video.removeEventListener('loadedmetadata', this.initScrollAnimation)
    }
  },
  methods: {
    initScrollAnimation() {
      const video = this.$refs.videoRef
      const container = this.$refs.containerRef
      
      if (!video || !container) return

      // Make sure video is paused
      video.pause()
      
      // Create the scroll trigger
      this.trigger = ScrollTrigger.create({
        trigger: container,
        start: 'top bottom', // Start when top of container hits bottom of viewport
        end: 'bottom top',   // End when bottom of container hits top of viewport
        scrub: 1,            // Smooth scrubbing (1 second catch-up)
        markers: false,
        onUpdate: (self) => {
            if (video.duration) {
                video.currentTime = video.duration * self.progress
            }
        }
      })
    }
  }
}
</script>

<template>
  <div ref="containerRef" class="planet-container">
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
}

.planet-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>