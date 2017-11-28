(function(window) {
  // fake data for initial render
  const todos = [
    {
      id: null,
      content: 'TodoList 1',
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
      content: 'Third TodoItem',
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

  function TodoList() {
    this.state = {
      todos: [],
      todosDOM: [],
      updatingItem: null,
    };

    this.todoListDOM = document.querySelector('#todo-list');
  }

  // initial render
  TodoList.prototype.render = function() {
    todos.map(todo => {
      todo.parentUpdater = this.parentUpdater.bind(this);
      this.state.todos.push(new Todo(todo));
    });

    this.todoListDOM.innerHTML = "";
    this.state.todos.map(todo => {
      const li = document.createElement('li');
        li.setAttribute('todoId', todo.state.id);
      // const todoDOM = new Todo(todo);
      this.state.todosDOM.push(todo.render());
      li.appendChild(todo.render());
      this.todoListDOM.appendChild(li);
    });
  };

  TodoList.prototype.add = function(todo) {
    todo.parentUpdater = this.parentUpdater.bind(this);
    let newTodo = new Todo(todo);
    this.state.todos.push(newTodo);
    const li = document.createElement('li');
    li.setAttribute('todoId', newTodo.state.id);

    this.state.todosDOM.push(newTodo.render());
    li.appendChild(newTodo.render());
    this.todoListDOM.prepend(li);
  };

  TodoList.prototype.delete = function(todoId, state) {
    // remove for todos Store
    const todoIndex = this.state.todos.findIndex(todo => {
      return todo.state.id === todoId;
    });
    this.state.todos.splice(todoIndex, 1);

    // select DOM item to delete
    const todo = this.todoListDOM.querySelector(`li[todoid='${todoId}']`);
    this.todoListDOM.removeChild(todo);
  }

  // check for current updating status of TodoListStore
  TodoList.prototype.parentUpdater = function(todoId, newState) {
    if (newState.mode === 'edit') {
      if (!this.state.updatingItem) {
        this.state.updatingItem = newState;
        this.update(todoId, newState);
      } else {
        // cancel current editing Item
        const { updatingItem } = this.state;
        updatingItem.mode = 'view';
        this.update(updatingItem.id, updatingItem);

        // update new editing Item
        this.state.updatingItem = newState;
        this.update(todoId, newState);
      }
    } if (newState.mode === 'delete') {
      this.delete(todoId);
    } else {
      if (this.state.updatingItem && this.state.updatingItem.mode === 'edit') {
        this.state.updatingItem = null;
        this.update(todoId, newState);
      }
    }
  };

  // update an TodoItem (re-render)
  TodoList.prototype.update = function(todoId, newState) {
    // empty that Item first
    console.log(`Updated/Re-rendered item ${todoId}`);
    const todoLi = document.querySelector(`li[todoid="${todoId}"]`);

    // add updater to TodoItem state;
    newState.parentUpdater = this.parentUpdater.bind(this);
    const newTodo = new Todo(newState);
    todoLi.replaceChild(newTodo.render(), todoLi.children[0]);

    // autofocus on new input box and select all text inside
    if (newState.mode === 'edit') {
      todoLi.querySelector('input').focus();
      todoLi.querySelector('input').select();
    }
  };

  window.TodoListStore = new TodoList();
})(window);