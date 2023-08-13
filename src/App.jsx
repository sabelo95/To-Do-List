import TodoSearch from './components/TodoSearch/TodoSearch'
import TodoList from './components/TodoList/TodoList'
import TodoInf from './components/TodoInf/TodoInf';
import UseFunctions from './components/UseFunctions/UseFunctions';
import Modal from './components/Modal/Modal';
import { useState } from 'react';
import { FaPlus } from 'react-icons/fa'
import TodoForm from './components/TodoForm/TodoForm';

function App() {

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal)
  }

 
  const {
    todos,
    setTodos,
    searchValue,
    searchedTodos,
    completedTodos,
    completeTodo,
    deleteTodo,
    setSearchValue,
    addTodo,
  } = UseFunctions();

 
    



  return (
    <>
      <TodoInf todos={todos} completedTodos={completedTodos}/>
      <TodoSearch todos={todos}  setSearchValue={setSearchValue} searchValue={searchValue}/>
      <TodoList todos={searchedTodos} completeTodo={completeTodo} deleteTodo={deleteTodo}/>
     {/*  <Addtodo todos={todos} setTodos={setTodos}/> */}
     <div>
      <button className="add-icon-button" onClick={toggleModal}>
        <FaPlus /> {/* Icono de React */}
      </button>
      {showModal && (
        <Modal onClose={toggleModal}>
          <TodoForm onSubmit={addTodo}/>
        </Modal>
      )}
    </div>
    </>
  )
}

export default App
