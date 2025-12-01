<script setup>
import SectionHeading from '../atoms/SectionHeading.vue'
import ServiceCard from '../molecules/ServiceCard.vue'

const services = [
  {
    icon: 'shopping-cart',
    title: 'E-Commerce',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.'
  },
  {
    icon: 'laptop',
    title: 'Responsive Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.'
  },
  {
    icon: 'lock',
    title: 'Web Security',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.'
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
