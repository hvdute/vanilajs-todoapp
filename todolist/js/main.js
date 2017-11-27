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
// const todoList = new TodoList();
todos.map(todo => TodoListStore.add(new Todo(todo)));


// event handler for #todo-input
function addNewTodo(event) {
  if (event.key === 'Enter') {
    let newTodo = new Todo({
      id: null,
      content: event.target.value,
      isDone: false,
      mode: 'view',
    });

    // clear textbox
    event.target.value = "";
    TodoListStore.add(newTodo);
  }
}