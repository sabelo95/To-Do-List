import React from "react";
import "../../styles/TodoItem.css";
import { FaCheck, FaTimes } from "react-icons/fa"; // Importa los íconos desde una librería de íconos (por ejemplo, react-icons)

const TodoItem = ({ text, completeTodo, completed, deleteTodo }) => {
  const handleTodoClick = () => {
    if (!completed) {
      completeTodo(text);
    }
  };

  return (
    <li className="TodoItem">
      <span className="TodoItem-icon" onClick={handleTodoClick}>
        {completed ? <FaCheck /> : <FaCheck />}
      </span>
      <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
        {text}
      </p>
      <span className="TodoItem-icon" onClick={() => deleteTodo(text)}>
        <FaTimes />
      </span>
    </li>
  );
};

export default TodoItem;
