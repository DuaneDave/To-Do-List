import './style.css';
import TodoArray from './modules/TodoArray.js';
import TodoItem from './modules/TodoItem.js';
import popUp from './modules/toast.js';

const todoArray = new TodoArray();

const renderTodos = () => {
  const todoWrapper = document.querySelector('.todo-container');
  todoWrapper.innerHTML = '';
  if (todoArray.getAllTodos().length === 0) {
    todoWrapper.innerHTML = '<h3 class= "alert">Todo is Empty</h3>';
  } else {
    todoArray.getAllTodos().forEach((todo, index) => {
      const todoItem = document.createElement('div');
      todoItem.classList.add('todo-item');
      const todoStatus = () => {
        const status = todo.completed ? 'checked' : '';
        return status;
      };
      todoItem.innerHTML = `
        <div data-check = ${index} class="todo border-bottom flex">
        <input data-complete = ${todo.id} class="box" ${todoStatus()} type="checkbox" />
        <input data-item = ${todo.id} class="item ${todoStatus()}" type="text" value="${todo.description}" />
        <i id="delete-btn" data-remote = ${index} class='bx bx-trash' id="delete-btn"></i>
        </div>
      `;
      todoWrapper.appendChild(todoItem);
    });
  }

  const deletBtn = document.querySelectorAll('#delete-btn');
  deletBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const { remote } = e.target.dataset;
      todoArray.deleteTodo(remote);
      renderTodos();
    });
  });

  const editTodo = document.querySelectorAll('.todo-item');
  const checkedBox = document.querySelectorAll('.box');
  editTodo.forEach((todo) => {
    todo.addEventListener('keyup', (e) => {
      const { dataset, value } = e.target;
      const id = dataset.item;
      const description = value.trim();
      const completed = false;
      const newTodo = new TodoItem(description, completed, id);
      todoArray.updateTodo(id, newTodo);
      checkedBox[id - 1].checked = false;
      todo.classList.remove('checked');
    });
  });

  const todoItems = document.querySelectorAll('.item');
  const chexkbox = document.querySelectorAll('.box');
  chexkbox.forEach((checkbox) => {
    checkbox.addEventListener('click', (e) => {
      const { complete } = e.target.dataset;
      if (checkbox.checked) {
        todoArray.toggleCompleted(complete);
        todoItems[complete - 1].classList.add('checked');
      } else {
        todoArray.toggleCompleted(complete);
        todoItems[complete - 1].classList.remove('checked');
      }
    });
  });

  const removeCompleted = document.querySelector('#clear-all');
  removeCompleted.addEventListener('click', () => {
    todoArray.clearCompleted();
    popUp();
    renderTodos();
  });
};

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const todoText = document.querySelector('.input').value;
  if (!todoText) {
    return;
  }

  const todo = new TodoItem(
    todoText,
    false,
    todoArray.getAllTodos().length + 1,
  );
  todoArray.addTodo(todo);
  form.reset();
  document.querySelector('.input').focus();
  renderTodos();
});

window.onload = renderTodos();
