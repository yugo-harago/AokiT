<script setup>
import img1 from '../../assets/img/clients/creative-market.jpg'
import img2 from '../../assets/img/clients/designmodo.jpg'
import img3 from '../../assets/img/clients/envato.jpg'
import img4 from '../../assets/img/clients/themeforest.jpg'

const clients = [img1, img2, img3, img4]
</script>

<template>
  <section class="py-5">
    <div class="container">
      <div class="row">
        <div v-for="(client, index) in clients" :key="index" class="col-sm-6 col-md-3">
          <a href="#">
            <img class="img-fluid d-block mx-auto" :src="client" alt="">
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
