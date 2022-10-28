import React, {useState} from 'react';

function NewTodoForm({addTodo}) {

  const [textInput, setTextInput] = useState("");

  function updateText(e) {
    e.preventDefault();
    addTodo(textInput);
    setTextInput("");
  }

  return (
    <form className="NewTodoForm">
      <label htmlFor="todo-text-input">
        Todo Text:
        <input id="todo-text-input" value={textInput} onChange={(e) => { setTextInput(e.target.value) }} />
      </label>
      <button onClick={updateText}>Create Todo</button>
    </form>
  )
}

export default NewTodoForm;