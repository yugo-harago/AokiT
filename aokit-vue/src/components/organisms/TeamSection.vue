<script setup>
import SectionHeading from '../atoms/SectionHeading.vue'
import TeamMember from '../molecules/TeamMember.vue'
import img1 from '../../assets/img/members/Administrator.jpg'
import img2 from '../../assets/img/members/CEO.jpg'
import img3 from '../../assets/img/members/Chef.jpg'

const teamMembers = [
  {
    image: img1,
    name: 'Jow Ito',
    role: 'Sushi Chef',
    email: 'joe@aokit.co',
    socials: []
  },
  {
    image: img2,
    name: 'Sho Aoki',
    role: 'CEO',
    email: 'sho@aokit.co',
    socials: []
  },
  {
    image: img3,
    name: 'Andrew I. Watanabe',
    role: 'Managing Director',
    email: 'andy@aokit.co',
    socials: []
  }
]
</script>

<template>
  <section class="team-section" id="team">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <SectionHeading 
            title="Our Team" 
            subtitle="Meet the people behind AokiT." 
          />
        </div>
      </div>
      <div class="row">
        <TeamMember 
          v-for="(member, index) in teamMembers" 
          :key="index"
          :image="member.image"
          :name="member.name"
          :role="member.role"
          :email="member.email"
          :socials="member.socials"
        />
      </div>
      <!-- <div class="row">
          <div class="col-lg-8 mx-auto text-center">
              <p class="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
          </div>
      </div> -->
    </div>
  </section>
</template>

<style scoped>
</style>
