import React, { useState } from 'react';
import { FaPlus, FaTrash, FaEdit } from 'react-icons/fa';
import '../styles/Todo.css'

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(null);

  const handleAddTodo = () => {
    if (newTodo.trim() === '') return;

    if (isEditing) {
      const updatedTodos = todos.map(todo =>
        todo.id === currentTodo.id ? { ...todo, text: newTodo } : todo
      );
      setTodos(updatedTodos);
      setIsEditing(false);
      setCurrentTodo(null);
    } else {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
    }
    setNewTodo('');
  };

  const handleDeleteTodo = id => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleEditTodo = todo => {
    setNewTodo(todo.text);
    setIsEditing(true);
    setCurrentTodo(todo);
  };

  const handleToggleComplete = id => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div className="app-container">
      <h1 className='title'>Todo List</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Add a new task..."
          value={newTodo}
          onChange={e => setNewTodo(e.target.value)}
        />
        <button onClick={handleAddTodo}>
          <FaPlus />
        </button>
      </div>
      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleComplete(todo.id)}
            />
            <span>{todo.text}</span>
            <div className="icons">
              <FaEdit onClick={() => handleEditTodo(todo)} />
              <FaTrash onClick={() => handleDeleteTodo(todo.id)} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
