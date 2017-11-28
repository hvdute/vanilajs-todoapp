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
    input.checked = isDone;
    const span = document.createElement('span');
    span.className = 'custom-control-indicator';

    this.render = function() {
      label.appendChild(input);
      label.appendChild(span);
      return label;
    };
  }

  function TodoContent(todoId, content, mode, isDone, parentTodo) {
    this.state = {
      todoId,
      mode,
      content: content || "",
      isDone
    };

    // create a div here to wrap content.
    const div = document.createElement('div');
      div.className = 'todo-content';
    const input = document.createElement('input');
      input.className = "form-control-lg todo-update";
      input.setAttribute('todoId', this.state.todoId);
      input.onkeypress = (event) => {
        // for Enter to save
        // event.key == "Enter"
        if (event.key === 'Enter') {
          if (event.target.value !== '') {
            parentTodo.state.content = event.target.value;
            parentTodo.changeMode();
          } else {
            alert('Please enter a todo...');
          }
        }
      };

      input.onkeydown = (event) => {
        if (event.key === 'Escape') {
          parentTodo.changeMode();
        }
      }

    const h3 = document.createElement('h3');
      h3.className = this.state.isDone ? 'col-sm-11 todo-content done' : 'col-sm-11 todo-content';
      h3.ondblclick = (event) => {
        // double click to edit
        console.log(event);
        console.log('Double clicked on this todo: ' + this.state.todoId);
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
        return input;
      }
    }
  }

  window.DOMUtilities = {
    CheckBox,
    TodoContent,
  };
})(window);