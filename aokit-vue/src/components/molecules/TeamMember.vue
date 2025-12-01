<script setup>
import SocialIcon from '../atoms/SocialIcon.vue';

defineProps({
  image: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  socials: {
    type: Array,
    default: () => []
  }
})
</script>

<template>
  <div class="col-sm-4">
    <div class="team-member">
      <img class="rounded-circle mx-auto" :src="image" :alt="name">
      <h4>{{ name }}</h4>
      <p class="text-muted">{{ role }}</p>
      <ul class="list-inline social-buttons">
        <SocialIcon 
          v-for="(social, index) in socials" 
          :key="index" 
          :icon="social.icon" 
          :href="social.href" 
        />
      </ul>
    </div>
  </div>
</template>
