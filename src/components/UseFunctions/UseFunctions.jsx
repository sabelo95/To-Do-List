import { useState } from "react";
const UseFunctions = ()=> {
    const defaultTodos = [
        { text: 'Jugar play', completed: false },
        { text: 'Sacar los perros', completed: false },
        { text: 'Estudiar react', completed: false },
        { text: 'conseguir un empleo en programación', completed: false },
        { text: 'Darle una finca a mis padres', completed: false },
      ];
    
          const [todos,setTodos]=useState(defaultTodos)
          const [searchValue,setSearchValue]=useState("")
    
          const searchedTodos = todos.filter(
            (todo) => {
              const todoText = todo.text.toLowerCase();
              const searchText = searchValue.toLowerCase();
              return todoText.includes(searchText);
            }
          );
    
          const completedTodos = todos.filter((todo) => todo.completed === true);
    
    
          const completeTodo = (texto) => {
            // Actualiza el estado de completitud del todo con el texto dado
            setTodos(prevTodos => 
              prevTodos.map(todo =>
                todo.text === texto ? { ...todo, completed: true } : todo
              )
            );
          }
          
          const deleteTodo = (texto) => {
            setTodos(prevTodos =>
              prevTodos.filter(todo => todo.text !== texto)
            );
          }

          const addTodo = (todoText) => {
            const newTodos = [...todos]; // Crea una copia del array existente
            newTodos.push({ text: todoText, completed: false }); // Agrega el nuevo todo
            setTodos(newTodos); // Actualiza el estado con el nuevo array
          }

          return {todos,
            setTodos,
            searchValue,
            searchedTodos,
            completedTodos,
            completeTodo,
            deleteTodo,
            addTodo,
            setSearchValue,}
}

export default UseFunctions