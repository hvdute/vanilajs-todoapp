(function(window) {
  function TodoList() {
    this.state = {
      todos: [],
      todosDOM: [],
    };

    this.todoListDOM = document.querySelector('#todo-list');
  }

  TodoList.prototype.render = function() {
    this.todoListDOM.innerHTML = "";
    this.state.todos.map(todo => {
      const li = document.createElement('li');
        li.setAttribute('todoId', todo.state.id);
      // const todoDOM = new Todo(todo);
      this.state.todosDOM.push(todo.render());
      li.appendChild(todo.render());
      this.todoListDOM.appendChild(li);
    });

    // this.todoListDOM.replaceChild(this.state.todosDOM, this.todoListDOM.children);
  }

  TodoList.prototype.add = function(todo) {
    this.state.todos.push(todo);
    const li = document.createElement('li');
    li.setAttribute('todoId', todo.state.id);
    // const todoDOM = new Todo(todo);
    this.state.todosDOM.push(todo.render());
    li.appendChild(todo.render());
    this.todoListDOM.prepend(li);
// this.render();
  };

  window.TodoList = TodoList;
})(window);