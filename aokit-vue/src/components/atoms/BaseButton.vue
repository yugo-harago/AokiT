<script setup>
defineProps({
  href: {
    type: String,
    default: null
  },
  variant: {
    type: String,
    default: 'primary'
  },
  size: {
    type: String,
    default: 'xl'
  }
})
</script>

<template>
  <a v-if="href" :href="href" class="btn text-uppercase" :class="[`btn-${variant}`, `btn-${size}`]" role="button">
    <slot></slot>
  </a>
  <button v-else class="btn text-uppercase" :class="[`btn-${variant}`, `btn-${size}`]" type="button">
    <slot></slot>
  </button>
</template>
