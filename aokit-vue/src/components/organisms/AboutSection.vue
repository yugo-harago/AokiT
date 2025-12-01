<script setup>
import SectionHeading from '../atoms/SectionHeading.vue'
import TimelineItem from '../molecules/TimelineItem.vue'
import img1 from '../../assets/img/about/1.jpg'
import img2 from '../../assets/img/about/2.jpg'
import img3 from '../../assets/img/about/3.jpg'
import img4 from '../../assets/img/about/4.jpg'

const timelineItems = [
  {
    date: '2009-2011',
    heading: 'Our Humble Beginnings',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!',
    image: img1,
    inverted: false
  },
  {
    date: 'March 2011',
    heading: 'An Agency is Born',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!',
    image: img2,
    inverted: true
  },
  {
    date: 'December 2012',
    heading: 'Transition to Full Service',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!',
    image: img3,
    inverted: false
  },
  {
    date: 'July 2014',
    heading: 'Phase Two Expansion',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!',
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
            subtitle="Lorem ipsum dolor sit amet consectetur." 
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
