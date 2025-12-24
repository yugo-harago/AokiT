<script setup>
import { ref } from 'vue'
import SectionHeading from '../atoms/SectionHeading.vue'
import FormGroup from '../molecules/FormGroup.vue'
import mapImage from '../../assets/img/map-image.png'

const form = ref({
  name: '',
  email: '',
  phone: '',
  message: ''
})

const submitForm = () => {
  // Handle form submission
  console.log('Form submitted', form.value)
}
</script>

<template>
  <section id="contact" :style="{ backgroundImage: `url(${mapImage})` }">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <SectionHeading 
            title="Contact Us" 
            subtitle="191910 W Braker Ln #300, Austin Texas 78758" 
          />
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <form id="contactForm" name="contactForm" @submit.prevent="submitForm">
            <div class="row">
              <div class="col-md-6">
                <FormGroup 
                  id="name" 
                  placeholder="Your Name *" 
                  required 
                  v-model="form.name"
                />
                <FormGroup 
                  id="email" 
                  type="email" 
                  placeholder="Your Email *" 
                  required 
                  v-model="form.email"
                />
                <FormGroup 
                  id="phone" 
                  type="tel" 
                  placeholder="Your Phone *" 
                  required 
                  v-model="form.phone"
                />
              </div>
              <div class="col-md-6">
                <FormGroup 
                  id="message" 
                  placeholder="Your Message *" 
                  required 
                  isTextarea
                  v-model="form.message"
                />
              </div>
              <div class="w-100"></div>
              <div class="col-lg-12 text-center">
                <div id="success"></div>
                <button 
                  class="btn btn-primary btn-xl text-uppercase" 
                  id="sendMessageButton" 
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
