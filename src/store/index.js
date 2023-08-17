import {createStore} from 'vuex';

export default createStore({
    state: {
        tasks: [],
        completedTasks: []
    },
    mutations: {
        modifyTask(state, {title, id = null}) {
            if (id) {
                state.tasks = state.tasks.map(task => {
                    if (task.id === id) {
                        return {...task, title: title};
                    }
                    return task;
                });
                localStorage.setItem('tasks', JSON.stringify(state.tasks));
            } else {
                state.tasks.push({id: Date.now(), title: title, completed: false, edit: false});
                localStorage.setItem('tasks', JSON.stringify(state.tasks));
            }
        },

        completeTask(state, taskId) {
            const taskIndex = state.tasks.findIndex(task => task.id === taskId);
            if (taskIndex !== -1) {
                state.completedTasks.push(state.tasks[taskIndex]);
                state.tasks.splice(taskIndex, 1);
            }
            localStorage.setItem('completedTasks', JSON.stringify(state.completedTasks));
            localStorage.setItem('tasks', JSON.stringify(state.tasks));
        },

        removeCompletedTask(state, taskId) {
            const taskIndex = state.completedTasks.findIndex(task => task.id === taskId);
            if (taskIndex !== -1) {
                state.completedTasks.splice(taskIndex, 1);
            }
            localStorage.setItem('completedTasks', JSON.stringify(state.completedTasks));
        }
    },
    actions: {
        addTask({commit, state}, {title, id}) {
            commit('modifyTask', {title, id});
        },

        completeTask({commit, state}, {id}) {
            commit('completeTask', id);
        },

        removeCompletedTask({commit, state}, {id}) {
            commit('removeCompletedTask', id);
        },

        getFromStorage({commit, state}) {
            state.tasks = JSON.parse(localStorage.getItem('tasks'))
            state.completedTasks = JSON.parse(localStorage.getItem('completedTasks'));
        }
    }
});
