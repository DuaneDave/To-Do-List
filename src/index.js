import './style.css';
import TodoArray from './modules/TodoArray.js';
import TodoItem from './modules/TodoItem.js';

const formSubmit = document.querySelector('#form');
const clear = document.querySelector('#remove');
const todoElement = document.querySelector('.todo-container');

const todoArray = new TodoArray();

const renderTodos = () => {
  todoElement.innerHTML = '';
  if (todoArray.getAllTodos().length === 0) {
    todoElement.innerHTML = '<p class= "empty"> No todos yet</p>';
  } else {
    todoArray.getAllTodos().forEach((todo, index) => {
      const todoItem = document.createElement('div');
      todoItem.classList.add('todo-item');
      todoItem.innerHTML = `
      <div data-check = ${index} class="todo border-bottom flex">
        <input class="box" type="checkbox" />
        <input data-item = ${todo.id} class="todo-item" type="text" value="${todo.description}" />
        <i id="delete-btn" data-remote = ${index} class='bx bx-trash' id="delete-btn"></i>
      </div>
    `;
      todoElement.appendChild(todoItem);
    });
  }

  const deletBtn = document.querySelectorAll('#delete-btn');
  deletBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const id = e.target.dataset.remote;
      todoArray.deleteTodo(id);
      renderTodos();
    });
  });

  const editTodo = document.querySelectorAll('.todo-item');
  editTodo.forEach((todo) => {
    todo.addEventListener('keyup', (e) => {
      const id = e.target.dataset.item;
      const description = e.target.value.trim();
      const completed = false;
      const newTodo = new TodoItem(description, completed, id);
      todoArray.updateTodo(id, newTodo);
    });
  });

  const clearAllTodos = () => {
    todoArray.clearAllTodos();
    renderTodos();
  };
  clear.addEventListener('click', clearAllTodos);
};

formSubmit.addEventListener('submit', (e) => {
  e.preventDefault();
  const todoDescription = document.querySelector('.input').value;
  const todo = new TodoItem(
    todoDescription,
    false,
    todoArray.getAllTodos().length + 1,
  );
  todoArray.addTodo(todo);
  formSubmit.reset();
  document.querySelector('.input').focus();
  renderTodos();
});

window.onload = renderTodos();
