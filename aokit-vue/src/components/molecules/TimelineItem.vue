<script setup>
defineProps({
  image: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  heading: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  inverted: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <li :class="{ 'timeline-inverted': inverted }">
    <div class="timeline-image">
      <img class="rounded-circle img-fluid" :src="image" alt="">
    </div>
    <div class="timeline-panel">
      <div class="timeline-heading">
        <h4>{{ date }}</h4>
        <h4 class="subheading">{{ heading }}</h4>
      </div>
      <div class="timeline-body">
        <p class="text-muted">{{ body }}</p>
      </div>
    </div>
  </li>
</template>
