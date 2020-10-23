<template>
  <div id="app">
    <Header />
    <TodoForm />
    <TodoList />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Common/Header.vue";
import Footer from "@/components/Common/Footer.vue";
import TodoForm from "@/components/TodoList/TodoForm.vue";
import TodoList from "@/components/TodoList/TodoList.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    TodoForm,
    TodoList
  }
};
</script>
