<template>
  <div class="todo-list">
    <h2>Todo List</h2>
    <ul>
      <todo-item
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @delete="deleteTodo"
        @toggle="toggleTodo"
        @edit="editTodo"
      />
    </ul>
    <edit-todo-popup
      v-if="editingTodo"
      :todo="editingTodo"
      :visible="true"
      @save="saveTodo"
      @cancel="cancelEdit"
    />
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";
import EditTodoPopup from "./EditTodoPopup.vue";

export default {
  name: "TodoList",
  components: {
    TodoItem,
    EditTodoPopup,
  },
  props: {
    todos: {
      type: Array,
      required: true,
    },
    editingTodo: {
      type: Object,
      default: null,
    },
  },
  methods: {
    deleteTodo(id) {
      this.$emit("delete-todo", id);
    },
    toggleTodo(id) {
      this.$emit("toggle-todo", id);
    },
    editTodo(todo) {
      this.$emit("edit-todo", todo);
    },
    saveTodo(updatedTodo) {
      this.$emit("save-todo", updatedTodo);
    },
    cancelEdit() {
      this.$emit("cancel-edit");
    },
  },
};
</script>

<style scoped>
.todo-list {
  margin-top: 20px;
}
</style>
