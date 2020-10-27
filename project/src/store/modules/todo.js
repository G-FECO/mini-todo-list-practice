import * as todoApi from "../../api/todos";

const state = {
  todos: {},
  loading: false
};

const mutations = {
  getTodos(state, payload) {
    state.todos = payload;
  },
  finishLoading(state) {
    state.loading = true;
  }
};

const actions = {
  async GET_TODOS({ commit }) {
    try {
      const { data } = await todoApi.getTodos();
      commit("getTodos", data);
    } catch (error) {
      console.log(error);
      alert("예기치 못한 에러가 발생했습니다.\n관리자에게 문의하세요.");
    }
  },
  async ADD_TODO({ dispatch }, payload) {
    const newTodo = {
      ...payload,
      completed: false
    };
    await todoApi.addTodo(newTodo);
    dispatch("GET_TODOS");
  },
  async UPDATE_TODO({ dispatch }, { todoKey, contents }) {
    await todoApi.updateTodo(todoKey, contents);
    dispatch("GET_TODOS");
  },
  async TOGGLE_COMPLETED_TODO({ dispatch }, { todoKey, completed }) {
    await todoApi.toggleCompletedTodo(todoKey, completed);
    dispatch("GET_TODOS");
  },
  async DELETE_TODO({ dispatch }, todoKey) {
    await todoApi.deleteTodo(todoKey);
    dispatch("GET_TODOS");
  }
};

const getters = {
  lastlyTodoId(state) {
    const convertedArrayTodos = Object.entries(state.todos);
    return state.todos
      ? convertedArrayTodos[convertedArrayTodos.length - 1][1].id
      : 0;
  }
};

export default { state, mutations, actions, getters };
