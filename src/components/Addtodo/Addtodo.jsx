import React, { useState } from "react";

const Addtodo = ({ todos, setTodos }) => {
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      const newTodos = [...todos]; // Crea una copia del array existente
      newTodos.push({ text: newTodo, completed: false }); // Agrega el nuevo todo
      setTodos(newTodos); // Actualiza el estado con el nuevo array
      setNewTodo(""); // Limpiar el campo después de agregar
    }
  };

  return (
    <>
      <input
        placeholder="Escribe un nuevo todo"
        className="TodoSearch"
        value={newTodo}
        onChange={e => setNewTodo(e.target.value)}
      />
      <button onClick={addTodo}>Agregar</button>
    </>
  );
};

export default Addtodo;
