// get DOM utilities
const { CheckBox, TodoContent } = window.DOMUtilities;

let todo = new Todo(null, 'Hello World');
console.log(todo);
console.log('rendered');
console.log(todo.render());

const li = document.createElement('li');
li.appendChild(todo.render());

const todoList = document.getElementById('todo-list');
todoList.appendChild(li);