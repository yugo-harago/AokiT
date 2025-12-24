<script setup>
import SectionHeading from '../atoms/SectionHeading.vue'
import TimelineItem from '../molecules/TimelineItem.vue'
import img1 from '../../assets/img/about/1.jpg'
import img2 from '../../assets/img/about/2.jpg'
import img3 from '../../assets/img/about/3.jpg'
import img4 from '../../assets/img/about/4.jpg'

const timelineItems = [
  {
    date: 'November 2025',
    heading: 'Established',
    body: 'AokiT Inc. was founded in Austin, Texas, to serve as an international hub connecting Japan and the world.',
    image: img1,
    inverted: false
  },
  {
    date: 'Our Mission',
    heading: 'Connecting Japan & The World',
    body: 'We facilitate the exchange of food, culture, products, and human resources, bringing the essence of Japan and new value to local communities.',
    image: img2,
    inverted: true
  },
  {
    date: 'Our Positioning',
    heading: 'Creating Value',
    body: 'With strong connections to Japan and cross-border business expertise, we prioritize human networks and respect for Japanese food culture.',
    image: img3,
    inverted: false
  },
  {
    date: 'Future',
    heading: 'Expanding Horizons',
    body: 'We continue to create smooth pathways for global exchange, leveraging our expertise in real estate, insurance, and import/export operations.',
    image: img4,
    inverted: true
  }
]
</script>

<template>
  <section id="about">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <SectionHeading 
            title="About" 
            subtitle="Bringing the essence of Japan and new value to local communities." 
          />
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <ul class="list-group timeline">
            <TimelineItem 
              v-for="(item, index) in timelineItems" 
              :key="index"
              :date="item.date"
              :heading="item.heading"
              :body="item.body"
              :image="item.image"
              :inverted="item.inverted"
            />
            <li class="list-group-item timeline-inverted">
              <div class="timeline-image">
                <h4>Be Part<br>&nbsp;Of Our<br>&nbsp;Story!</h4>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
