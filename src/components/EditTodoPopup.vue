<template>
  <div class="edit-todo-popup" v-if="visible">
    <div class="popup-content">
      <input type="text" v-model="editedText" />
      <button @click="saveEdit">Save</button>
      <button @click="cancelEdit">Cancel</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    },
    visible: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      editedText: this.todo.text
    };
  },
  methods: {
    saveEdit() {
      this.$emit('save', { id: this.todo.id, text: this.editedText });
    },
    cancelEdit() {
      this.$emit('cancel');
    }
  }
}
</script>

<style scoped>
.edit-todo-popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
.popup-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
</style>