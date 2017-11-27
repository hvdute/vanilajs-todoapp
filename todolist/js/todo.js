// Todo model
(function(window) {
  function Todo(id, content) {
    this.state = {
      id: id || (Math.random().toString(36).slice(-10)),
      content: content || "Default task...",
      isDone: false,
    };

    // this.id = id || (Math.random().toString(36).slice(-10));
    // this.content = content || "this is a task, you need to do";
    // this.done = false;
  }

  Todo.prototype.toggleStatus = function() {
    this.state.isDone = !this.state.isDone;
  };

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
    let dumpEvent = () => {
      console.log('Clicked');
    };
    const checkBox = new CheckBox(this.state.id, true, this.toggleStatus.bind(this));
    const todoContent = new TodoContent(this.state.id, this.state.content, 'view');
    const todoItem = document.createElement('div');
      todoItem.className = 'todo-item';
      todoItem.appendChild(checkBox.render());
      todoItem.appendChild(todoContent.render());
    return todoItem;
  };

  // register Todo model to global context
  window.Todo = Todo;
})(window);