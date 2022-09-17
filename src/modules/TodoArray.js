class TodoArray {
  constructor() {
    this.todos = JSON.parse(localStorage.getItem('todos')) || [];
  }

  reShuffle() {
    for (let i = 0; i < this.todos.length; i += 1) {
      this.todos[i].id = i + 1;
    }
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  addTodo(todo) {
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  updateTodo(id, newTodo) {
    this.todos[id - 1] = newTodo;
    this.reShuffle();
  }

  deleteTodo(index) {
    if (this.todos.length === 1) {
      this.todos = [];
    } else {
      this.todos.splice(index, 1);
    }
    this.reShuffle();
  }

  getAllTodos() {
    return this.todos;
  }

  toggleCompleted(index) {
    this.todos[index - 1].completed = !this.todos[index - 1].completed;
    this.reShuffle();
  }

  clearCompleted() {
    const newArr = this.todos.filter((todo) => !todo.completed);
    this.todos = newArr;
    this.reShuffle();
  }
}

export default TodoArray;
