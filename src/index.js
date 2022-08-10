// eslint-disable-next-line no-unused-vars
import _ from 'lodash';
import './style.css';
import { addDeleteBtn, renderTodoList, todoList } from './Functionality.js';

const input = document.querySelector('input');

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (input.value !== '') {
    renderTodoList();
    addDeleteBtn();
  }

  input.value = '';
});

const loadTodo = () => {
  const getTodos = JSON.parse(localStorage.getItem('todo'));
  if (getTodos) {
    getTodos.forEach((todo) => {
      todoList.push(todo);
      renderTodoList();
    });
  }
  addDeleteBtn();
};
loadTodo();
