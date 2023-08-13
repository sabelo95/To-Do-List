import React, { useState } from 'react';



const TodoForm = ({ onSubmit }) => {
  const [todoText, setTodoText] = useState('');

  const handleInputChange = (event) => {
    setTodoText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(todoText);
    setTodoText('');
  };

  return (
    <div className="todo-form">
      <h2>Agregar nuevo todo</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todoText}
          onChange={handleInputChange}
          placeholder="Ingrese su nuevo todo..."
        />
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
};

export default TodoForm