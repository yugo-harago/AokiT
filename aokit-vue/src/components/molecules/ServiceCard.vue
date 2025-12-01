<script setup>
defineProps({
  icon: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="col-md-4">
    <span class="fa-stack fa-4x">
      <i class="fa fa-circle fa-stack-2x text-primary"></i>
      <i class="fa fa-stack-1x fa-inverse" :class="`fa-${icon}`"></i>
    </span>
    <h4 class="section-heading">{{ title }}</h4>
    <p class="text-muted">{{ description }}</p>
  </div>
</template>
