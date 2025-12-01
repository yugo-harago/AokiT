<script setup>
import MainLayout from '../components/templates/MainLayout.vue'
import TheHeader from '../components/organisms/TheHeader.vue'
import ServicesSection from '../components/organisms/ServicesSection.vue'
import PortfolioSection from '../components/organisms/PortfolioSection.vue'
import AboutSection from '../components/organisms/AboutSection.vue'
import TeamSection from '../components/organisms/TeamSection.vue'
import ClientsSection from '../components/organisms/ClientsSection.vue'
import ContactSection from '../components/organisms/ContactSection.vue'
</script>

<template>
  <MainLayout>
    <TheHeader />
    <ServicesSection />
    <PortfolioSection />
    <AboutSection />
    <TeamSection />
    <ClientsSection />
    <ContactSection />
  </MainLayout>
</template>
