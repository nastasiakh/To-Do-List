<script setup>
const props = defineProps({
  label: String
})

const emit = defineEmits(['click'])

const handleClick = () => {
  emit('click');
};
</script>

<template>
  <button @click="handleClick">{{ props.label }}</button>
</template>

