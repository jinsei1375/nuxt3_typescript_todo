import { defineStore } from 'pinia';

interface Todo {
  id: number;
  text: string;
}

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: [] as Todo[],
  }),
  actions: {
    addTodo(text: string) {
      const newTodo: Todo = {
        id: Date.now(),
        text,
      };
      this.todos.push(newTodo);
    },
    removeTodo(id: number) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
  },
});
