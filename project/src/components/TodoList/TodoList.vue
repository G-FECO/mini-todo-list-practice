<template>
  <main>
    <ul v-if="this.todos.length > 0">
      <li v-for="todo in todos" :key="todo.id">
        <TodoListItem :todo="todo" />
      </li>
    </ul>
    <div v-else class="no-todos-alert">
      <i class="fas fa-exclamation-triangle"></i>
      <p>Todo 항목을 추가해주세요.</p>
    </div>
  </main>
</template>

<script>
import { mapState } from "vuex";
import TodoListItem from "@/components/TodoList/TodoListItem.vue";

export default {
  components: {
    TodoListItem
  },
  computed: {
    ...mapState({
      todos: state => state.todo.todos
    })
  }
};
</script>

<style lang="scss" scoped>
main {
  width: 80%;
  margin: 0 auto;

  li {
    margin-bottom: 0.8rem;
  }

  .no-todos-alert {
    text-align: center;

    > i {
      font-size: 8rem;
      color: $colorWarning;
      margin-bottom: 0.5rem;
    }

    > p {
      font-size: 1.5rem;
      font-weight: 700;
    }
  }
}
</style>
