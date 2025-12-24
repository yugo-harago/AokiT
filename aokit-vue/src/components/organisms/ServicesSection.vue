<script setup>
import SectionHeading from '../atoms/SectionHeading.vue'
import ServiceCard from '../molecules/ServiceCard.vue'

const services = [
  {
    icon: 'plane',
    title: 'Import & Export',
    description: 'Facilitating the exchange of food, culture, and products between Japan and the world.'
  },
  {
    icon: 'cutlery',
    title: 'Restaurant Business',
    description: 'Bringing the essence of Japan to local communities through authentic culinary experiences.'
  },
  {
    icon: 'globe',
    title: 'Global Hub',
    description: 'Creating smooth pathways for global exchange and human resources.'
  }
]
</script>

<template>
  <section id="services">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <SectionHeading 
            title="Services" 
            subtitle="Lorem ipsum dolor sit amet consectetur" 
          />
        </div>
      </div>
      <div class="row text-center">
        <ServiceCard 
          v-for="(service, index) in services" 
          :key="index"
          :icon="service.icon"
          :title="service.title"
          :description="service.description"
        />
      </div>
    </div>
  </section>
</template>
