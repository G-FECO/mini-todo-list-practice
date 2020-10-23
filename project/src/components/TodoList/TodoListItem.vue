<template>
  <div class="todo-item">
    <div class="d-flex justify-content-between">
      <div class="todo-item-index">No.{{ todo.id }}</div>
      <div class="todo-item-icons">
        <input
          type="checkbox"
          class="mr-1"
          :checked="todo.completed"
          @click="toggleCompleted"
        />
        <i class="fas fa-trash-alt" @click="deleteTodo"></i>
      </div>
    </div>
    <div :class="`todo-item-contents ${todo.completed ? 'completed' : ''}`">
      {{ todo.contents }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object
    },
    todoKey: {
      type: String
    }
  },
  methods: {
    toggleCompleted() {
      const payload = {
        todoKey: this.todoKey,
        completed: !this.todo.completed
      };
      this.$store.dispatch("TOGGLE_COMPLETED_TODO", payload);
    },
    deleteTodo() {
      this.$store.dispatch("DELETE_TODO", this.todoKey);
    }
  }
};
</script>

<style lang="scss" scoped>
.todo-item {
  font-size: 1.5rem;
  border: 1px solid $colorLight;
  border-radius: 0.5rem;
  box-shadow: 2px 4px 4px $colorLight;
  padding: 0.5rem;

  &-icons {
    display: flex;
    align-items: center;
  }

  &-contents {
    font-size: 1.25rem;
    color: $colorDark;
    margin-top: 0.5rem;
  }

  .completed {
    text-decoration: line-through;
    color: $colorLight;
  }
}
</style>
