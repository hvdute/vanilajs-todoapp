// Todo model

(function(window) {
  function Todo(id, content) {
    this.id = id || (Math.random().toString(36).slice(-10));
    this.content = content || "this is a task, you need to do";
    this.done = false;

    // this.toggleStatus = () => {
    //   this.done = !this.done;
    // }
  }

  Todo.prototype.toggleStatus = function() {
    console.log(this.done);
    this.done = !this.done;
    console.log(this.done);
  };

  Todo.prototype.setContent = function(content) {
    if (!content) {
      throw new Error("Please set a valid todo...");
    } else {
      this.content = content.trim();
    }
  };

  // register Todo model to global context
  window.Todo = Todo;
})(window);