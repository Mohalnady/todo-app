<template>
  <div class="todo-item">
    <input
      type="checkbox"
      :checked="todo.completed"
      @change="toggleCompletion"
    />
    <span :class="{ completed: todo.completed }">{{ todo.text }}</span>
    <div class="actions-btns">
      <button @click="editTodo">Edit</button>
      <button @click="deleteTodo">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  methods: {
    toggleCompletion() {
      this.$emit("toggle", this.todo.id);
    },
    deleteTodo() {
      this.$emit("delete", this.todo.id);
    },
    editTodo() {
      this.$emit("edit", this.todo);
    },
  },
};
</script>

<style scoped>
.todo-item {
  display: flex;
  align-items: space-between;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}
.actions-btns button {
  margin-right: 1rem;
}

.completed {
  text-decoration: line-through;
  color: gray;
}
</style>
