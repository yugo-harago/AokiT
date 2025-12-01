<script setup>
defineProps({
  id: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    required: true
  },
  required: {
    type: Boolean,
    default: false
  },
  modelValue: {
    type: String,
    default: ''
  },
  isTextarea: {
    type: Boolean,
    default: false
  }
})

defineEmits(['update:modelValue'])
</script>

<template>
  <div class="mb-3 form-group">
    <textarea 
      v-if="isTextarea"
      class="form-control" 
      :id="id" 
      :placeholder="placeholder" 
      :required="required"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    ></textarea>
    <input 
      v-else
      class="form-control" 
      :type="type" 
      :id="id" 
      :placeholder="placeholder" 
      :required="required"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    >
    <small class="form-text text-danger lead"></small>
  </div>
</template>
