import React from 'react';

function Todo({text, id, deleteTodo}) {

  return (
    <div className="Todo" id={"todo-" + id}>
      <span>
        {text}
      </span>
      <button onClick={(e) => { deleteTodo(id) }}>X</button>
    </div>
  )
}

export default Todo;