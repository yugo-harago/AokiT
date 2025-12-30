<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import MainLayout from '../components/templates/MainLayout.vue'
import Hero from '../components/organisms/Hero.vue'
import AboutSection from '../components/organisms/AboutSection.vue'
import TeamSection from '../components/organisms/TeamSection.vue'
import ClientsSection from '../components/organisms/ClientsSection.vue'
import ContactSection from '../components/organisms/ContactSection.vue'
import Planet from '../components/organisms/Planet.vue'
import ServiceMobile from '../components/organisms/ServiceMobile.vue'

const isMobileOrSlow = ref(false)

const checkMobile = () => {
  // Check for slow connection or data saver
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection
  const isSlow = connection && (connection.saveData || connection.effectiveType === '2g' || connection.effectiveType === 'slow-2g')
  
  // Check screen width (standard mobile breakpoint)
  const isSmallScreen = window.innerWidth < 768
  
  isMobileOrSlow.value = isSmallScreen || isSlow
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})
</script>

<template>
  <MainLayout>
    <ServiceMobile v-if="isMobileOrSlow" />
    <Planet v-else />
    <AboutSection />
    <TeamSection />
    <ClientsSection />
    <ContactSection />
  </MainLayout>
</template>
