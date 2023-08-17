<script setup>
import Checkbox from './shared/Checkbox.vue';
import {computed, ref} from 'vue';
import {useStore} from 'vuex';
import InputField from './shared/InputField.vue';
import EnterButton from './shared/EnterButton.vue';

const store = useStore();

const tasks = (computed(() => store.state.tasks))

let inputValue = ref('');
let inputError = ref(false);

const addTask = () => {
  const title = inputValue.value;
  store.commit('modifyTask', {title: title, id: null});
};

const completeTask = (taskId) => {
  store.commit('completeTask', taskId);
};

const saveTask = (task) => {
  task.edit = false;
  store.commit('modifyTask', {title: task.title, id: task.id});
};

</script>

<template>
  <div id="toDoTasks" class="section-wrapper d-flex flex-column">
    <h4 class="py-2">Todo Tasks</h4>
    <div>
      <ul v-if="tasks.length" class="todo-list">
        <li v-for="(task, index) in tasks" :key="task.id">
          <div class="item-todo">
            <div class="item-todo-edit add-todo" v-if="task.edit">
              <InputField
                  :value="task.title"
                  @input="task.title = $event"
                  @error="task.error = $event"
              />
              <EnterButton @click="saveTask(task)" :disabled="task.error" label="Save" class="button"/>
            </div>
            <div class="item-todo-task" v-else>
              <div class="item-todo-task-title">
                <Checkbox :task="task" @click="completeTask(task.id)"/>
                <span>{{ task.title }}</span>
              </div>
              <button @click="task.edit = true" class="button">Edit</button>
            </div>
          </div>
        </li>
        <div class="scrollbar" id="style-1">
          <div class="force-overflow"></div>
        </div>
      </ul>
      <div v-else class="additional-info">There is no todo task yet</div>
      <div class="add-todo">
        <InputField
            :value="inputValue"
            @input="inputValue = $event"
            @error="inputError = $event"
        />
        <EnterButton @click="addTask" :disabled="inputError" label="Add" class="button"/>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>