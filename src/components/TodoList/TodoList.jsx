import TodoItem from "../TodoItem/TodoItem";
import "../../styles/TodoList.css"



  const TodoList = ({todos,completeTodo,deleteTodo})=> {
    
        return (
           todos.map((todo)=> (
                <TodoItem key={todo.text} text={todo.text} completeTodo={completeTodo} completed={todo.completed} deleteTodo={deleteTodo}/>
            ))
        )
  }

  export default TodoList