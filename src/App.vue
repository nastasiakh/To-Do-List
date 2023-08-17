<script>
import Header from './components/Header.vue';
import ToDoTasks from './components/ToDoTasks.vue';
import CompletedTasks from './components/CompletedTasks.vue';

export default {
  components: {
    Header,
    ToDoTasks,
    CompletedTasks,
  }
}
</script>

<template>
  <div id="app" class="d-flex">
    <div class="container">
      <Header/>
      <ToDoTasks/>
      <CompletedTasks/>
    </div>
  </div>
</template>

<style scoped>

</style>
