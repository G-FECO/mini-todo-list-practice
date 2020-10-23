import { setInterceptors } from "./config/interceptors";

const instance = setInterceptors();

// get Todos
export function getTodos() {
  return instance.get("/todos.json");
}

// add Todo
export function addTodo(todo) {
  return instance.post("/todos.json", todo);
}

// update Todo

// toggle Todo Completed
export function toggleCompletedTodo(todoKey, completed) {
  return instance.patch(`/todos/${todoKey}/.json`, { completed });
}

// delete Todo
export function deleteTodo(todoKey) {
  return instance.delete(`/todos/${todoKey}/.json`);
}
