// get DOM utilities
const { CheckBox, TodoContent } = window.DOMUtilities;

// fake data
const todos = [
  {
    id: null,
    content: 'Complete TodoList',
    isDone: false,
    mode: 'view'
  },
  {
    id: null,
    content: 'Refactor Todo model',
    isDone: true,
    mode: 'view'
  },
  {
    id: null,
    content: 'Complete TodoList',
    isDone: true,
    mode: 'view'
  },
  {
    id: null,
    content: 'Complete TodoList',
    isDone: false,
    mode: 'view'
  },
];

// render fake datas to screen
const todoList = new TodoList();
todos.map(todo => todoList.add(new Todo(todo)));
