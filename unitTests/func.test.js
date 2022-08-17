import TodoArray from '../src/modules/TodoArray.js';
import TodoItem from '../src/modules/TodoItem.js';

const todoArray = new TodoArray();
const obj = [
  {
    id: todoArray.getAllTodos().length + 1,
    description: 'test',
    completed: false,
  },
  {
    id: 2,
    description: 'test',
    completed: false,
  },
];

obj.forEach((item) => {
  const todo = new TodoItem(item.description, item.completed, item.id);
  todoArray.addTodo(todo);
});

const renderTodos = () => {
  document.body.innerHTML = `<ul class="Ul">
  </ul>`;
  todoArray.getAllTodos().forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item.description;
    document.querySelector('.Ul').appendChild(li);
  });
};

beforeAll(() => {
  renderTodos();
});

describe('Test add and remove functions', () => {
  test('should add an item to array', () => {
    const newArr = new TodoItem(
      'Blue',
      false,
      todoArray.getAllTodos().length + 1,
    );
    todoArray.addTodo(newArr);
    renderTodos();
    expect(todoArray.getAllTodos().length).toEqual(3);
  });


});
