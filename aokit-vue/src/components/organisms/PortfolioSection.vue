<script setup>
import SectionHeading from '../atoms/SectionHeading.vue'
import PortfolioItem from '../molecules/PortfolioItem.vue'
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
  <div 
    v-for="item in portfolioItems" 
    :key="`modal-${item.id}`"
    class="modal fade text-center portfolio-modal" 
    role="dialog" 
    tabindex="-1" 
    :id="`portfolioModal${item.id}`"
  >
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <div class="modal-body">
                <h2 class="text-uppercase">Project Name</h2>
                <p class="text-muted item-intro">Lorem ipsum dolor sit amet consectetur.</p>
                <img class="img-fluid d-block mx-auto" :src="item.full">
                <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                <ul class="list-unstyled">
                  <li>Date: January 2017</li>
                  <li>Client: Threads</li>
                  <li>Category: {{ item.category }}</li>
                </ul>
                <button class="btn btn-primary" type="button" data-bs-dismiss="modal">
                  <i class="fa fa-times"></i><span>&nbsp;Close Project</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
