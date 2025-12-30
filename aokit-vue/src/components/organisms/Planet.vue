<script>
import gsap from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useRoute } from 'vue-router'
import { watch } from 'vue'
import planetVideoUrl from '../../assets/video/PlanetRotating_and_zoom.mov' // Renamed for clarity
import treeImage from '../../assets/img/Planet/Tree.jpg'
import Hero from './Hero.vue'

gsap.registerPlugin(ScrollTrigger)
ScrollTrigger.config({
  autoRefreshEvents: "visibilitychange,DOMContentLoaded,load" // make it robust
});

export default {
  name: 'Planet',
  components: {
    Hero
  },
  data() {
    return {
      planetVideoUrl, // Original URL for fetching
      videoBlobUrl: null, // Blob URL after loading
      treeImage,
      isInitialized: false,
      isLoading: true,
      loadingProgress: 0,
      loadingError: null
    }
  },
  created() {
    this.timeline = null
  },
  setup() {
      const route = useRoute()
      return { route }
  },
  mounted() {
    // Lock scroll immediately
    document.body.style.overflow = 'hidden'
    
    // Start loading video
    this.loadVideo()

    // Watch for hash changes while on the page
    this.$watch(
      () => this.route.hash,
      (newHash) => {
        if (newHash === '#services' && !this.isLoading) {
          this.scrollToServices()
        }
      }
    )
  },
  beforeUnmount() {
    if (this.timeline) this.timeline.kill()
    
    // Unlock scroll on unmount just in case
    document.body.style.overflow = ''
    
    // Revoke blob URL to free memory
    if (this.videoBlobUrl) {
        URL.revokeObjectURL(this.videoBlobUrl)
    }

    const video = this.$refs.videoRef
    if (video) {
        video.removeEventListener('loadedmetadata', this.initScrollAnimation)
    }
  },
  methods: {
    loadVideo() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', this.planetVideoUrl, true);
        xhr.responseType = 'blob';

        xhr.onload = (e) => {
            if (xhr.status === 200) {
                const blob = xhr.response;
                this.videoBlobUrl = URL.createObjectURL(blob);
                this.handleLoadComplete();
            } else {
                console.error('Planet: Failed to load video', xhr.statusText);
                this.loadingError = 'Failed to load video';
                // Fallback: try setting source directly (might act weird but better than nothing)
                this.handleLoadComplete();
            }
        };

        xhr.onprogress = (e) => {
            if (e.lengthComputable) {
                this.loadingProgress = Math.round((e.loaded / e.total) * 100);
            }
        };
        
        xhr.onerror = (e) => {
             console.error('Planet: Network error loading video', e);
             this.loadingError = 'Network error';
             this.handleLoadComplete(); // Try validation anyway
        };

        xhr.send();
    },
    handleLoadComplete() {
        this.loadingProgress = 100;
        
        // Small delay to let the user see 100%
        setTimeout(() => {
            this.isLoading = false;
            document.body.style.overflow = ''; // Unlock scroll
            
            this.$nextTick(() => {
                this.setupVideoListeners();
            });
        }, 500);
    },
    setupVideoListeners() {
        const video = this.$refs.videoRef
        if (!video) return

        video.addEventListener('error', (e) => {
            console.error('Planet: Video loading error', video.error)
        })

        if (video.readyState >= 1) { // HAVE_METADATA
            this.initScrollAnimation()
        } else {
            video.addEventListener('loadedmetadata', () => {
                this.initScrollAnimation()
            })
        }
    },
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
      
      
      // Polling for valid duration
      let attempts = 0;
      const maxAttempts = 50; // 5 seconds

      const checkDuration = () => {
          attempts++;
          // Added 40s fallback if we time out
          if ((video.duration && Number.isFinite(video.duration) && video.duration > 0)) {
              this.createTimeline(video.duration);
          } else if (attempts > maxAttempts) {
              console.warn('Planet: Could not detect video duration, defaulting to 20s');
              this.createTimeline(20); // Fallback to 20s
          } else {
              if (attempts % 10 === 0) console.log('Planet: Waiting for valid video duration...', video.duration);
              setTimeout(checkDuration, 100);
          }
      };
      
      checkDuration();
    },
    createTimeline(videoDur) {
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

      console.log('Planet: Initializing timeline with duration:', videoDur);

      this.timeline = gsap.timeline({
        scrollTrigger: {
            trigger: container,
            start: 'top top',
            end: '+=2500%', 
            pin: true,
            scrub: 2, 
            markers: false, 
            onRefresh: () => video.pause()
        }
      })
      
      // --- SEQUENCE START ---

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

          // Force refresh after creation
          ScrollTrigger.refresh()
          
          // Signal that Planet is ready (video loaded & pinned)
          window.isPlanetReady = true;
          window.dispatchEvent(new Event('planet-ready'));
          
          // Check if we need to scroll to services initially
          if (this.route.hash === '#services') {
              // Small delay to ensure everything is ready
              setTimeout(() => {
                  this.scrollToServices()
              }, 100)
          }
    },
    scrollToServices() {
        if (!this.timeline) return

        // Get the scroll position associated with the 'services' label
        const servicesLabelTime = this.timeline.labels['services']
        
        // We need to find the scroll position. 
        // GSAP ScrollTrigger maps scroll distance to timeline duration.
        // We can use the timeline's scrollTrigger to get the associated scroll position.
        
        // However, a simpler way with scrub is usually to scroll the window.
        // But we need to know WHERE.
        
        // Let's use the scrollTrigger's method if available or calculate it.
        const st = this.timeline.scrollTrigger
        if (st) {
             // Calculate progress (0 to 1) of the label
             const progress = servicesLabelTime / this.timeline.duration()
             
             // Calculate scroll position
             // start + (end - start) * progress
             const scrollPos = st.start + (st.end - st.start) * progress
             
             window.scrollTo({
                 top: scrollPos,
                 behavior: 'smooth'
             })
        }
    }
  }
}
</script>

<template>
  <div ref="containerRef" class="planet-container">
    
    <!-- Loading Overlay -->
    <div v-if="isLoading" class="loading-overlay">
        <div class="loading-content">
            <div class="loading-spinner"></div>
            <div class="loading-text">Loading Experience... {{ loadingProgress }}%</div>
            <div class="loading-bar-bg">
                <div class="loading-bar-fill" :style="{ width: loadingProgress + '%' }"></div>
            </div>
            <div v-if="loadingError" class="loading-error">{{ loadingError }}</div>
        </div>
    </div>

    <!-- Main Content -->
    <div v-show="!isLoading" class="content-wrapper">
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
        v-if="videoBlobUrl || !isLoading"
        ref="videoRef"
        class="planet-video"
        :src="videoBlobUrl || planetVideoUrl"
        muted
        playsinline
        preload="auto"
        ></video>
    </div>
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

/* Loading Screen */
.loading-overlay {
    position: fixed;
    inset: 0;
    background-color: #000;
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
}

.loading-content {
    text-align: center;
    width: 300px;
}

.loading-text {
    font-size: 1.2rem;
    margin-bottom: 20px;
    font-family: sans-serif;
    letter-spacing: 1px;
}

.loading-bar-bg {
    width: 100%;
    height: 4px;
    background-color: #333;
    border-radius: 2px;
    overflow: hidden;
}

.loading-bar-fill {
    height: 100%;
    background-color: #4CAF50; /* Green accent */
    transition: width 0.1s linear;
}

.loading-spinner {
    width: 40px;
    height: 40px;
    border: 3px solid rgba(255,255,255,0.3);
    border-radius: 50%;
    border-top-color: #fff;
    animation: spin 1s ease-in-out infinite;
    margin: 0 auto 20px;
}

@keyframes spin {
    to { transform: rotate(360deg); }
}

.content-wrapper {
    width: 100%;
    height: 100%;
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