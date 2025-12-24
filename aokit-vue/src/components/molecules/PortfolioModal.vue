<script setup>
defineProps({
  id: {
    type: String,
    required: true
  },
  title: {
    type: String,
    default: 'Project Name'
  },
  category: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: 'Use this area to describe your project.'
  },
  client: {
    type: String,
    default: 'Threads'
  },
  date: {
    type: String,
    default: 'January 2017'
  }
})
</script>

<template>
  <div 
    class="modal fade text-center portfolio-modal" 
    role="dialog" 
    tabindex="-1" 
    :id="id"
  >
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <div class="modal-body">
                <h2 class="text-uppercase">{{ title }}</h2>
                <p class="text-muted item-intro">Lorem ipsum dolor sit amet consectetur.</p>
                <img class="img-fluid d-block mx-auto" :src="image">
                <p>{{ description }}</p>
                <ul class="list-unstyled">
                  <li>Date: {{ date }}</li>
                  <li>Client: {{ client }}</li>
                  <li>Category: {{ category }}</li>
                </ul>
                <button class="btn btn-primary" type="button" data-bs-dismiss="modal">
                  <i class="fa fa-times"></i><span>&nbsp;Close Project</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
