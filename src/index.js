// eslint-disable-next-line no-unused-vars
import _ from 'lodash';
import './style.css';

const todoList = [];
const input = document.querySelector('input');

const renderTodoList = () => {
  const todoContainer = document.querySelector('.todo-container');
  todoContainer.innerHTML += `
    <div class="todo border-bottom flex">
      <input class="box" type="checkbox" />
      <input type="text" value="${input.value}" />
      <i class='bx bx-trash'></i>
    </div>
    `;
};

const removeTodo = (e) => {
  const todo = e.target.parentElement;
  todo.remove();
};

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  todoList.push({
    id: todoList.length + 1,
    text: input.value,
    completed: false,
  });
  renderTodoList();

  input.value = '';
});

const deleteBtn = document.querySelectorAll('.bx-trash');
deleteBtn.addEventListener('click', removeTodo);
