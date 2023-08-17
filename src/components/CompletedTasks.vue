<script setup>
import Checkbox from './shared/Checkbox.vue';
import {computed} from 'vue';
import {useStore} from 'vuex';

const store = useStore();

const completedTasks = computed(() => store.state.completedTasks);

const removeTask = (taskId) => {
  store.commit('removeCompletedTask', taskId);
}
</script>

<template>
  <div id="completedTasks" class="section-wrapper d-flex flex-column">
    <h4 class="py-2">Completed Tasks</h4>
    <ul v-if="completedTasks.length" class="py-2 todo-list">
      <li v-for="task in completedTasks" :key="task.id"
          class="item-todo d-flex flex-row justify-content-between align-items-baseline">
        <div class="item-todo-task-title">
          <Checkbox :task="task" :checked="true" readonly="true"/>
          <span>{{ task.title }}</span>
        </div>
        <button @click="removeTask(task.id)" class="button">Remove</button>
      </li>
    </ul>
    <div v-else class="additional-info">There is no completed task yet</div>
  </div>
</template>

<style scoped>

</style>