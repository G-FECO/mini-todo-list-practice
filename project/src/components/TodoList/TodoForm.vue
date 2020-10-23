<template>
  <form @submit.prevent="addTodo">
    <input
      type="text"
      v-model="contents"
      placeholder="추가할 Todo를 작성해주세요."
    />
    <button>Add</button>
  </form>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  data() {
    return {
      contents: ""
    };
  },
  computed: {
    ...mapState({
      userId: state => state.user.userId
    }),
    ...mapGetters(["lastlyTodoId"])
  },
  methods: {
    addTodo() {
      if (this.contents.length === 0) {
        alert("1자 이상 입력해주세요.");
        return;
      }

      this.$store.dispatch("ADD_TODO", {
        id: this.lastlyTodoId + 1,
        user_id: this.userId,
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
