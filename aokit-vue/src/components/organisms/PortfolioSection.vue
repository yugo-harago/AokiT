<script setup>
import SectionHeading from '../atoms/SectionHeading.vue'
import PortfolioItem from '../molecules/PortfolioItem.vue'
import PortfolioModal from '../molecules/PortfolioModal.vue'
// Import images
import img1Thumb from '../../assets/img/portfolio/1-thumbnail.jpg'
import img2Thumb from '../../assets/img/portfolio/2-thumbnail.jpg'
import img3Thumb from '../../assets/img/portfolio/3-thumbnail.jpg'
import img4Thumb from '../../assets/img/portfolio/4-thumbnail.jpg'
import img5Thumb from '../../assets/img/portfolio/5-thumbnail.jpg'
import img6Thumb from '../../assets/img/portfolio/6-thumbnail.jpg'
import img1Full from '../../assets/img/portfolio/1-full.jpg'
import img2Full from '../../assets/img/portfolio/2-full.jpg'
import img3Full from '../../assets/img/portfolio/3-full.jpg'
import img4Full from '../../assets/img/portfolio/4-full.jpg'
import img5Full from '../../assets/img/portfolio/5-full.jpg'
import img6Full from '../../assets/img/portfolio/6-full.jpg'

const portfolioItems = [
  { id: 1, title: 'Threads', category: 'Illustration', thumb: img1Thumb, full: img1Full },
  { id: 2, title: 'Explore', category: 'Graphic Design', thumb: img2Thumb, full: img2Full },
  { id: 3, title: 'Finish', category: 'Identity', thumb: img3Thumb, full: img3Full },
  { id: 4, title: 'Lines', category: 'Branding', thumb: img4Thumb, full: img4Full },
  { id: 5, title: 'Southwest', category: 'Website Design', thumb: img5Thumb, full: img5Full },
  { id: 6, title: 'Window', category: 'Photography', thumb: img6Thumb, full: img6Full },
]
</script>

<template>
  <section class="bg-light" id="portfolio">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <SectionHeading 
            title="Portfolio" 
            subtitle="Lorem ipsum dolor sit amet consectetur." 
          />
        </div>
      </div>
      <div class="row">
        <PortfolioItem 
          v-for="item in portfolioItems" 
          :key="item.id"
          :image="item.thumb"
          :title="item.title"
          :category="item.category"
          :modalId="`portfolioModal${item.id}`"
        />
      </div>
    </div>
  </section>

  <!-- Modals -->
  <PortfolioModal 
    v-for="item in portfolioItems" 
    :key="`modal-${item.id}`"
    :id="`portfolioModal${item.id}`"
    :title="item.title"
    :category="item.category"
    :image="item.full"
  />
</template>
