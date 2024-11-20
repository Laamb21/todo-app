import React from 'react';
import TodoItem from './ToDoItem';

function TodoList({ todos, toggleComplete, deleteTodo }) {
  return (
    <div>
      {todos.length === 0 ? (
        <p>No to-dos! Add one above.</p>
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        ))
      )}
    </div>
  );
}

export default TodoList;
