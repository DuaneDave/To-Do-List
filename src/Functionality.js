const input = document.querySelector('input');
const todoList = JSON.parse(localStorage.getItem('todo')) || [];

// const saveTodo = () => {
//   localStorage.setItem('todo', JSON.stringify(todoList));
// };

const renderTodoList = () => {
  // if (input.value !== '') {
  //   todoList.push({
  //     id: todoList.length + 1,
  //     text: input.value,
  //     completed: false,
  //   });
  // }
  // const todoContainer = document.querySelector('.todo-container');
  // todoList.forEach((todo, index) => {
  //   const list = document.createElement('div');
  //   list.classList.add('todo');
  //   list.classList.add('border-bottom');
  //   list.classList.add('flex');
  //   list.innerHTML = `
  //   <input class="box" type="checkbox" />
  //   <input  data-input="${index}" class="input-item" type="text" value="${todo.text}" id="${todo.id}" />
  //   <i class='bx bx-trash' id="${todo.id}"></i>
  // `;
  //   todoContainer.appendChild(list);
  //   const editTodo = document.querySelectorAll('.input-item');
  //   editTodo.forEach((todo) => {
  //     todo.addEventListener('keyup', (e) => {
  //       const id = e.target.dataset.input;
  //       const description = e.target.value;
  //       todoList[id].text = description;
  //       localStorage.setItem('todo', JSON.stringify(todoList));
  //     });
  //   });
  //   addDeleteBtn();
  // });
};

const removeTodo = (e) => {
  const { parentElement, id } = e.target;
  parentElement.remove();

  const newArr = todoList.filter(
    (index) => index.id.toString() !== id.toString(),
  );
  todoList.length = 0;
  let i = 0;

  newArr.forEach((item) => {
    item.id = i;
    i += 1;
  });

  todoList.push(...newArr);
  localStorage.setItem('todo', JSON.stringify(todoList));
};

const addDeleteBtn = () => {
  const deleteBtn = document.querySelectorAll('.bx-trash');
  deleteBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      removeTodo(e);
    });
  });
};

export {
  renderTodoList, removeTodo, addDeleteBtn, todoList,
};
