import React, {useState} from 'react';
import NewTodoForm from './NewTodoForm.js';
import Todo from './Todo.js';


function TodoList() {
  const [todos, setTodos] = useState([]);
  const [nextId, setNextId] = useState(1);

  function incrementId() {
    setNextId(nextId + 1);
  }

  function addTodo(text) {
    setTodos([
      ...todos,
      {
        text: text,
        id: nextId
      }
    ])
    incrementId();
  }

  function deleteTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return(
    <div className="TodoList">
      <NewTodoForm addTodo={addTodo} />
      {todos.map(todo => {
        return (<Todo key={todo.id} text={todo.text} id={todo.id} deleteTodo={deleteTodo} />);
      })}

    </div>
  )
}

export default TodoList;