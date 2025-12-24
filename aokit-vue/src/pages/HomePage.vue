<script setup>
import MainLayout from '../components/templates/MainLayout.vue'
import Hero from '../components/organisms/Hero.vue'
import ServicesSection from '../components/organisms/ServicesSection.vue'
import AboutSection from '../components/organisms/AboutSection.vue'
import TeamSection from '../components/organisms/TeamSection.vue'
import ClientsSection from '../components/organisms/ClientsSection.vue'
import ContactSection from '../components/organisms/ContactSection.vue'
import Planet from '../components/organisms/Planet.vue'
</script>

<template>
  <MainLayout>
    <Planet />
    <Hero />
    <ServicesSection />
    <AboutSection />
    <TeamSection />
    <ClientsSection />
    <ContactSection />
  </MainLayout>
</template>
