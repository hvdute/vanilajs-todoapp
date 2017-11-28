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

    // this.id = id || (Math.random().toString(36).slice(-10));
    // this.content = content || "this is a task, you need to do";
    // this.done = false;
  }

  Todo.prototype.toggleStatus = function() {
    this.state.isDone = !this.state.isDone;
    // console.log(this.state);
    this.parentUpdater(this.state.id, this.state);
  };

  Todo.prototype.changeMode = function(event) {
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

  // Todo DOM builder
  // render return a DOM todo item
  Todo.prototype.render = function() {
    const { id, content, mode, isDone } = this.state;
    const checkBox = new CheckBox(id, this.state.isDone, this.toggleStatus.bind(this));
    const todoContent = new TodoContent(id, content, mode, isDone, this);
    const todoItem = document.createElement('div');
      todoItem.className = 'todo-item';
    if (mode === "view") {
      todoItem.appendChild(checkBox.render());
      todoItem.appendChild(todoContent.render());
    } else {
      todoItem.appendChild(todoContent.render());
    }
    return todoItem;
  };

  // register Todo model to global context
  window.Todo = Todo;
})(window);