// DOM Utilities for creating static elements
(function(window) {
  function CheckBox(todoId, isDone, eventListener) {
    this.state = {
      todoId,
      isDone,
    };

    const label = document.createElement('label');
    label.className = 'custom-control custom-checkbox';

    const input = document.createElement('input');
    input.className = 'custom-control-input';
    input.setAttribute("todoId", this.state.todoId);
    input.setAttribute('type', 'checkbox');
    input.addEventListener('change', eventListener);

    const span = document.createElement('span');
    span.className = 'custom-control-indicator';

    this.render = function() {
      label.appendChild(input);
      label.appendChild(span);
      return label;
    };
  }

  function TodoContent(todoId, content, mode, parentTodo) {
    this.state = {
      todoId,
      mode,
      content: content || "",
    };

    // create a div here to wrap content.
    const div = document.createElement('div');
      div.className = 'todo-content';
    const input = document.createElement('input');
      input.className = "control-lg";
      input.setAttribute('todoId', this.state.todoId);
      input.onkeypress = (event) => {
        // for Enter to save
        // event.key == "Enter"
        if (event.key == 'Enter') {
          console.log('On Enter keypress. Change perent todos content');
          // console.log(event);
          parentTodo.state.content = event.target.value;
          parentTodo.changeMode();
          console.log(parentTodo.state);
        }
      };
    const h3 = document.createElement('h3');
      h3.className = 'col-sm-11 todo-content';
      h3.ondblclick = (event) => {
        // double click to edit
        console.log(event);
        console.log('Double clicked on this todo');
        parentTodo.changeMode();
      };

    this.render = function() {
      if (this.state.mode === 'view') {
        let content = document.createTextNode(this.state.content);
        h3.appendChild(content);
        // div.appendChild(h3);
        return h3;
      } else if (this.state.mode === 'edit') {
        input.defaultValue = this.state.content;
        // div.appendChild(input);
        return input;
      }
    }
  }

  window.DOMUtilities = {
    CheckBox,
    TodoContent,
  };
})(window);