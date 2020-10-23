<template>
  <div class="todo-list">
    <Loading v-if="!loading" />
    <ul v-if="loading && this.todos">
      <li v-for="(todo, key) in todos" :key="key">
        <TodoListItem :todo="todo" :todoKey="key" />
      </li>
    </ul>
    <div v-else-if="loading && !this.todos" class="no-todos-alert">
      <i class="fas fa-exclamation-triangle"></i>
      <p>Todo 항목을 추가해주세요.</p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import TodoListItem from "@/components/TodoList/TodoListItem.vue";
import Loading from "@/components/Common/Loading.vue";

export default {
  components: {
    TodoListItem,
    Loading
  },
  computed: {
    ...mapState({
      todos: state => state.todo.todos,
      loading: state => state.todo.loading
    })
  },
  async created() {
    await this.$store.dispatch("GET_TODOS");
    this.$store.commit("finishLoading");
  }
};
</script>

<style lang="scss" scoped>
.todo-list {
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
