class TodoArray {
  constructor() {
    this.todos = JSON.parse(localStorage.getItem('todos')) || [];
  }

  addTodo(todo) {
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  updateTodo(id, newTodo) {
    this.todos[id - 1] = newTodo;
    for (let i = 0; i < this.todos.length; i += 1) {
      this.todos[i].id = i + 1;
    }
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  deleteTodo(index) {
    if (this.todos.length === 1) {
      this.todos = [];
    } else {
      this.todos.splice(index, 1);
    }
    for (let i = 0; i < this.todos.length; i += 1) {
      this.todos[i].id = i + 1;
    }
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  getAllTodos() {
    return this.todos;
  }
}

export default TodoArray;
