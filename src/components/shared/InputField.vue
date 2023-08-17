<script setup>
import {ref, defineProps, defineEmits, watch} from 'vue';

const props = defineProps({
  value: String,
  minLength: {
    type: Number,
    default: 3
  },
  maxLength: {
    type: Number,
    default: 100
  },
});

const inputValue = ref(props.value);
const inputError = ref(false);

const emit = defineEmits(['input', 'error']);

watch(() => props.value, (newValue) => {
  inputValue.value = newValue;
});

watch(inputValue, (newValue) => {
  inputError.value = props.minLength >= inputValue.value.length || props.maxLength <= inputValue.value.length
  emit('error', inputError.value)
});

</script>

<template>
  <input
      type="text"
      :class="inputError ? 'error' : ''"
      placeholder="Enter task title..."
      v-model="inputValue"
      @input="$emit('input', $event.target.value)"
  />
</template>
