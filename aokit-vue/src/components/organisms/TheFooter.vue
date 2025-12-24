<script setup>
import SocialIcon from '../atoms/SocialIcon.vue'

const socialLinks = [
  { icon: 'twitter', href: '#' },
  { icon: 'facebook', href: '#' },
  { icon: 'linkedin', href: '#' }
]
</script>

<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <span class="copyright">Copyright &copy; AokiT Inc. 2025</span>
        </div>
        <div class="col-md-4">
          <ul class="list-inline social-buttons">
            <SocialIcon 
              v-for="(link, index) in socialLinks" 
              :key="index" 
              :icon="link.icon" 
              :href="link.href" 
            />
          </ul>
        </div>
        <div class="col-md-4">
          <ul class="list-inline quicklinks">
            <li class="list-inline-item"><a href="#">Privacy Policy</a></li>
            <li class="list-inline-item"><a href="#">Terms of Use</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
