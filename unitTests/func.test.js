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
      todoArray.getAllTodos().length + 1
    );
    todoArray.addTodo(newArr);
    renderTodos();
    expect(todoArray.getAllTodos().length).toEqual(3);
  });

  describe('Test deleteTodo', () => {
    test('should remove a single item from array', () => {
      todoArray.deleteTodo(1);
      renderTodos();
      expect(todoArray.getAllTodos().length).toEqual(2);
    });
  });

  describe('Check the Dom', () => {
    test('Should remove element from DOM', () => {
      const child = document.querySelectorAll('li');
      expect(child.length).toEqual(2);
    });
  });

  describe('Test updateTodo', () => {
    test('should update todo item', () => {
      const update = {
        id: 1,
        description: 'testing',
        completed: false,
      };

      todoArray.updateTodo(1, update);
      renderTodos();
      expect(todoArray.getAllTodos()[0].description).toEqual('testing');
    });
  });

  describe('Test toggleCompleted', () => {
    test('should clear all todos', () => {
      todoArray.toggleCompleted(1);
      renderTodos();
      expect(todoArray.getAllTodos()[0].completed).toEqual(true);
    });
  });
});
