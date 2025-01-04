<template>
  <div>
    <input v-model="newTodo" placeholder="Add a new todo" />
    <button @click="addTodo">追加</button>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.text }}
        <button @click="removeTodo(todo.id)">削除</button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useTodoStore } from '@/stores/todo';

const newTodo = ref('');
const todoStore = useTodoStore();

const addTodo = () => {
  if (newTodo.value.trim()) {
    todoStore.addTodo(newTodo.value);
    newTodo.value = '';
  }
};

const removeTodo = (id: number) => {
  todoStore.removeTodo(id);
};

const todos = computed(() => todoStore.todos);
</script>

<style scoped>
input {
  margin-bottom: 10px;
}
button {
  margin-left: 10px;
}
ul li:not(:last-child) {
  margin-bottom: 5px;
}
</style>
