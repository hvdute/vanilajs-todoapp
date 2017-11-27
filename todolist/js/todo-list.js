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
    todo.parentUpdater = this.update.bind(this);
    let newTodo = new Todo(todo);
    this.state.todos.push(newTodo);
    const li = document.createElement('li');
    li.setAttribute('todoId', newTodo.state.id);
    // const todoDOM = new Todo(todo);
    this.state.todosDOM.push(newTodo.render());
    li.appendChild(newTodo.render());
    this.todoListDOM.prepend(li);
  };

  // update an TodoItem (re-render)
  TodoList.prototype.update = function(todoId, newState) {
    // empty that Item first
    console.log('Updated/Re-rendered item ${todoId}');
    const todoLi = document.querySelector(`li[todoid="${todoId}"]`);

    // add updater to TodoItem state;
    newState.parentUpdater = this.update.bind(this);
    const newTodo = new Todo(newState);
    todoLi.replaceChild(newTodo.render(), todoLi.children[0]);
  };

  window.TodoListStore = new TodoList();
})(window);