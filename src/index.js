// eslint-disable-next-line no-unused-vars
import _ from 'lodash';
import './style.css';

const todoList = [
  {
    id: 1,
    description: 'Take out the trash',
    completed: false,
  },
  {
    id: 1,
    description: 'Talk to some friends',
    completed: false,
  },
  {
    id: 1,
    description: 'Clean the house',
    completed: false,
  },
];

const renderTodoList = () => {
  const todoContainer = document.querySelector('.todo-container');
  todoList.forEach((todo) => {
    todoContainer.innerHTML += `
    <div class="todo border-bottom flex">
      <input class="box" type="checkbox" />
      <input type="text" value="${todo.description}" />
      <i class='bx bx-dots-vertical-rounded'></i>
    </div>
    `;
  });
};

renderTodoList();
