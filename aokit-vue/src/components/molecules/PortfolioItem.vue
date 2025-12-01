<script setup>
defineProps({
  image: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  modalId: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="col-sm-6 col-md-4 portfolio-item">
    <a class="portfolio-link" :href="`#${modalId}`" data-bs-toggle="modal">
      <div class="portfolio-hover">
        <div class="portfolio-hover-content">
          <i class="fa fa-plus fa-3x"></i>
        </div>
      </div>
      <img class="img-fluid" :src="image" :alt="title">
    </a>
    <div class="portfolio-caption">
      <h4>{{ title }}</h4>
      <p class="text-muted">{{ category }}</p>
    </div>
  </div>
</template>
