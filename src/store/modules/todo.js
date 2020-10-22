const state = {
  todos: []
};

const mutations = {
  loadTodos(state, payload) {
    state.todos = payload;
  },
  addTodo(state, newTodo) {
    state.todos.push({
      ...newTodo,
      completed: false
    });
  },
  toggleCompleted(state, todoId) {
    state.todos = state.todos.map(todo => {
      return todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    })
  },
  deleteTodo(state, todoId) {
    const todoIndex = state.todos.findIndex(todo => todo.id === todoId);
    state.todos.splice(todoIndex, 1);
  }
};

const getters = {
  lastlyTodoId(state) {
    return state.todos[state.todos.length - 1].id;
  }
}

export default { state, mutations, getters };
