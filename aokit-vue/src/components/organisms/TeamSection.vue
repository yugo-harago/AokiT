<script setup>
import SectionHeading from '../atoms/SectionHeading.vue'
import TeamMember from '../molecules/TeamMember.vue'
import img1 from '../../assets/img/team/1.jpg'
import img2 from '../../assets/img/team/2.jpg'
import img3 from '../../assets/img/team/3.jpg'

const teamMembers = [
  {
    image: img1,
    name: 'Kay Garland',
    role: 'Lead Designer',
    socials: [
      { icon: 'twitter', href: '#' },
      { icon: 'facebook', href: '#' },
      { icon: 'linkedin', href: '#' }
    ]
  },
  {
    image: img2,
    name: 'Larry Parker',
    role: 'Lead Marketer',
    socials: [
      { icon: 'twitter', href: '#' },
      { icon: 'facebook', href: '#' },
      { icon: 'linkedin', href: '#' }
    ]
  },
  {
    image: img3,
    name: 'Diana Pertersen',
    role: 'Lead Developer',
    socials: [
      { icon: 'twitter', href: '#' },
      { icon: 'facebook', href: '#' },
      { icon: 'linkedin', href: '#' }
    ]
  }
]
</script>

<template>
  <section class="bg-light" id="team">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <SectionHeading 
            title="Team" 
            subtitle="Lorem ipsum dolor sit amet consectetur." 
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
          :socials="member.socials"
        />
      </div>
      <div class="row">
          <div class="col-lg-8 mx-auto text-center">
              <p class="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
          </div>
      </div>
    </div>
  </section>
</template>
