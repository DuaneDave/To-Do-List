const input = document.querySelector('input');
const todoList = [];

const saveTodo = () => {
  localStorage.setItem('todo', JSON.stringify(todoList));
};

const renderTodoList = () => {
  if (input.value !== '') {
    todoList.push({
      id: todoList.length,
      text: input.value,
      completed: false,
    });
  }

  const todoContainer = document.querySelector('.todo-container');
  const list = document.createElement('div');
  list.classList.add('todo');
  list.classList.add('border-bottom');
  list.classList.add('flex');
  todoList.forEach((todo) => {
    list.innerHTML = `
    <input class="box" type="checkbox" />
    <input type="text" value="${todo.text}" />
    <i class='bx bx-trash' id="${todo.id}"></i>
  `;

    todoContainer.appendChild(list);
  });
  saveTodo();
};

const removeTodo = (e) => {
  const { parentElement, id } = e.target;
  parentElement.remove();

  const newArr = todoList.filter(
    (index) => index.id.toString() !== id.toString(),
  );
  todoList.length = 0;
  let i = 1;

  newArr.forEach((item) => {
    item.id = i;
    i += 1;
  });

  todoList.push(...newArr);
  saveTodo();
};

const addDeleteBtn = () => {
  const deleteBtn = document.querySelectorAll('.bx-trash');
  deleteBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      removeTodo(e);
    });
  });
  saveTodo();
};

export {
  renderTodoList, removeTodo, addDeleteBtn, todoList,
};
