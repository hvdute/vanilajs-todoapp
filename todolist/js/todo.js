// Todo model
(function(window) {
  function Todo({ id, content, isDone, mode = 'view', parentUpdater }) {
    this.state = {
      id: id || (Math.random().toString(36).slice(-10)),
      content: content || "Default task...",
      isDone: isDone,
      mode,
    };
    this.parentUpdater = parentUpdater;
  }

  Todo.prototype.toggleStatus = function() {
    this.state.isDone = !this.state.isDone;
    this.parentUpdater(this.state.id, this.state);
  };

  Todo.prototype.changeMode = function() {
    this.state.mode = this.state.mode === 'view' ? 'edit' : 'view';
    // trigger a re-render on the todoList
    //// with todoId from event and new state
    // parentReRender(this.state.id, this.state);
    this.parentUpdater(this.state.id, this.state);
  }

  Todo.prototype.setContent = function(content) {
    if (!content) {
      throw new Error("Please set a valid todo...");
    } else {
      this.state.content = content.trim();
    }
  };

  Todo.prototype.delete = function() {
    this.state.mode = 'delete';
    this.parentUpdater(this.state.id, this.state);
  };

  // Todo DOM builder
  // render return a DOM todo item
  Todo.prototype.render = function() {
    const { id, content, mode, isDone } = this.state;
    const checkBox = new CheckBox(id, this.state.isDone, this.toggleStatus.bind(this));
    const todoContent = new TodoContent(id, content, mode, isDone, this);
    const deleteButton = new DeleteButton(id, this.delete.bind(this));
    const todoItem = document.createElement('div');
      todoItem.className = 'todo-item';
    if (mode === "view") {
      todoItem.appendChild(checkBox.render());
      todoItem.appendChild(todoContent.render());
      todoItem.appendChild(deleteButton.render());
    } else {
      todoItem.appendChild(todoContent.render());
    }
    return todoItem;
  };

  // register Todo model to global context
  window.Todo = Todo;
})(window);