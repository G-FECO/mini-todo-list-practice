<template>
  <form @submit.prevent="addTodo">
    <input type="text" v-model="contents" />
    <button>+</button>
  </form>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      contents: ""
    };
  },
  computed: {
    ...mapGetters(["lastlyTodoId"])
  },
  methods: {
    addTodo() {
      if (this.contents.length === 0) {
        alert("1자 이상 입력해주세요.");
        return;
      }

      this.$store.commit("addTodo", {
        id: this.lastlyTodoId + 1,
        contents: this.contents
      });
      this.contents = "";
    }
  }
};
</script>

<style lang="scss" scoped>
form {
  display: flex;
  width: 80%;
  margin: 1rem auto;

  > input {
    flex-grow: 1;
    margin-right: 0.75rem;
  }
}
</style>
