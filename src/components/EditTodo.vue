<template>
  <div class="edit-todo">
    <input type="text" v-model="editedText" />
    <button @click="saveEdit">Save</button>
    <button @click="cancelEdit">Cancel</button>
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
  data() {
    return {
      editedText: this.todo.text,
    };
  },
  methods: {
    saveEdit() {
      this.$emit("save", { id: this.todo.id, text: this.editedText });
    },
    cancelEdit() {
      this.$emit("cancel");
    },
  },
};
</script>

<style scoped>
.edit-todo {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}
</style>
