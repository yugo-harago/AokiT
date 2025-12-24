<script setup>
import headerBg from '../../assets/img/header-bg.jpg'
import BaseButton from '../atoms/BaseButton.vue'
</script>

<template>
  <header class="masthead" :style="{ backgroundImage: `url(${headerBg})` }">
    <div class="container">
      <div class="intro-text">
        <div class="intro-lead-in"><span>Connecting Japan and the World</span></div>
        <div class="intro-heading"><span>AokiT Inc.</span></div>
        <BaseButton href="#services">Tell me more</BaseButton>
      </div>
    </div>
  </header>
</template>
