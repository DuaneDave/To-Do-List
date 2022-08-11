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
  todoList.forEach((todo, index) => {
    list.innerHTML = `
    <input class="box" type="checkbox" />
    <input  data-input="${index}" class="input-item" type="text" value="${todo.text}" id="${todo.id}" />
    <i class='bx bx-trash' id="${todo.id}"></i>
  `;

    const editTodo = document.querySelectorAll('.input-item');
    editTodo.forEach((todo) => {
      todo.addEventListener('keyup', (e) => {
        const id = e.target.dataset.input;
        const description = e.target.value;
        todoList[id].text = description;
        saveTodo();
      });
    });
    todoContainer.appendChild(list);
  });
  saveTodo();
};

const editTodo = (e) => {
  e.preventDefault();
  const editTodo = document.querySelectorAll('.input-item');
  editTodo.forEach((todo) => {
    todo.addEventListener('keyup', (e) => {
      const { id } = e.target;
      const desciption = e.target.value;
      todoList.forEach((item) => {
        if (item.id === id) {
          item.text = desciption;
        }
      });
      saveTodo();
    });
  });
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
  renderTodoList,
  removeTodo,
  addDeleteBtn,
  todoList,
  editTodo,
};
