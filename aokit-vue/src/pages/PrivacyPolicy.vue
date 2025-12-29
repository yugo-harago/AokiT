<script setup>
import TheNavigation from '../components/organisms/TheNavigation.vue'
import TheFooter from '../components/organisms/TheFooter.vue'
import { onMounted } from 'vue'

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<template>
  <TheNavigation />
  <header class="masthead privacy-header">
    <div class="container">
      <div class="intro-text">
        <div class="intro-heading text-uppercase">Legal</div>
      </div>
    </div>
  </header>

  <section class="page-section">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h2 class="section-heading text-uppercase">Privacy Policy</h2>
          <p class="text-muted">Last updated: December 2025</p>
          
          <div class="legal-content">
            <h3>1. Introduction</h3>
            <p>Welcome to AokiT Inc. We respect your privacy and are committed to protecting your personal data.</p>

            <h3>2. Information We Collect</h3>
            <p>We may collect personal information such as name, email address, and other contact details when you interact with our services.</p>

            <h3>3. How We Use Your Information</h3>
            <p>We use your information to provide and improve our services, communicate with you, and comply with legal obligations.</p>
            
            <h3>4. Contact Us</h3>
            <p>If you have any questions about this Privacy Policy, please contact us.</p>
          </div>

          <hr class="my-5">

          <h2 class="section-heading text-uppercase">Terms of Use</h2>
          <p class="text-muted">Last updated: December 2025</p>

          <div class="legal-content">
            <h3>1. Agreement to Terms</h3>
            <p>By accessing our website, you agree to be bound by these Terms of Use.</p>

            <h3>2. Intellectual Property</h3>
            <p>The content on this website is owned by AokiT Inc. and is protected by copyright and other intellectual property laws.</p>

            <h3>3. Limitation of Liability</h3>
            <p>AokiT Inc. shall not be liable for any indirect, incidental, or consequential damages arising out of your use of this website.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <TheFooter />
</template>

<style scoped>
.privacy-header {
  background-color: #212529;
  text-align: center;
  background-image: none; /* Override default masthead image if needed */
}

.intro-heading {
  font-size: 3rem;
  font-weight: 700;
  color: white;
  margin-bottom: 2rem;
}

.legal-content h3 {
  margin-top: 2rem;
  font-size: 1.5rem;
}

.legal-content p {
  font-size: 1.1rem;
  line-height: 1.75;
}
</style>
