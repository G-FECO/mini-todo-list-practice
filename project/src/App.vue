<template>
  <div id="app">
    <Header />
    <TodoForm />
    <TodoList />
  </div>
</template>

<script>
import Header from "@/components/Common/Header.vue";
import TodoForm from "@/components/TodoList/TodoForm.vue";
import TodoList from "@/components/TodoList/TodoList.vue";

export default {
  name: "App",
  components: {
    Header,
    TodoForm,
    TodoList
  }
};
</script>
