import _ from 'lodash';
import './style.css';

const todoList = [
  {
    id: 1,
    text: 'Take out the trash',
    completed: false,
  },
  {
    id: 2,
    text: 'Go to bed',
    completed: false,
  },
  {
    id: 3,
    text: 'Take baby to school',
    completed: false,
  },
];

const renderTodoList = () => {
  const todoContainer = document.querySelector('.todo-container');

  todoList.forEach((todo) => {
    todoContainer.innerHTML += `
    <div class="todo border-bottom flex">
      <input class="box" type="checkbox" />
      <input type="text" value="${todo.text}" />
      <i class="bx bx-dots-vertical-rounded"></i>
    </div>
    `;
  });
};

renderTodoList();
