// src/App.js
import React, { useState } from 'react';
import './App.css';
import TodoForm from './ToDoForm';
import TodoList from './ToDoList';

function App() {
  // State to hold the list of to-dos
  const [todos, setTodos] = useState([]);

  // Function to add a new to-do
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(), // Unique ID based on timestamp
      text,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  };

  // Function to toggle the completion status of a to-do
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Function to delete a to-do
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app-container">
      <h1>To-Do List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
