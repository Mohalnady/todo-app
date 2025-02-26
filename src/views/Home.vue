<template>
  <div class="home">
    <h1>My Todo List</h1>
    <input v-model="newTodo" @keyup.enter="addTodo" placeholder="Add a new todo" />
    <TodoList
      :todos="todos"
      :editingTodo="editingTodo"
      @delete-todo="deleteTodo"
      @toggle-todo="toggleTodo"
      @edit-todo="editTodo"
      @save-todo="updateTodo"
      @cancel-edit="cancelEdit"
    />
  </div>
</template>

<script>
import TodoList from '../components/TodoList.vue';

export default {
  components: {
    TodoList
  },
  data() {
    return {
      todos: [],
      newTodo: '',
      editingTodo: null
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim()) {
        this.todos.push({ id: Date.now(), text: this.newTodo, completed: false });
        this.newTodo = '';
      }
    },
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
    toggleTodo(id) {
      const todo = this.todos.find(todo => todo.id === id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    editTodo(todo) {
      this.editingTodo = todo;
    },
    updateTodo(updatedTodo) {
      const todo = this.todos.find(todo => todo.id === updatedTodo.id);
      if (todo) {
        todo.text = updatedTodo.text;
      }
      this.editingTodo = null;
    },
    cancelEdit() {
      this.editingTodo = null;
    }
  }
};
</script>

<style scoped>
.home {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}
input {
  margin-top: 20px;
  padding: 10px;
  width: 80%;
}
</style>