<script setup>
import {ref} from 'vue';
import {useStore} from 'vuex';

const store = useStore();

const props = defineProps({
  task: Object,
  checked: Boolean
});

const isChecked = ref(props.checked);

const setCompleted = () => {
  isChecked.value = !isChecked.value;
  if (props.task) {
    props.task.completed = isChecked.value;
    if (isChecked.value) {
      store.commit('completeTask', props.task.id);
    }
  }
};
</script>

<template>
  <input type="checkbox" v-model="isChecked" @change="setCompleted"/>
</template>

<style scoped>

</style>