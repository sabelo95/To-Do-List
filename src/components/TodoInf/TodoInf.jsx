import "../../styles/TodoInf.css"
const TodoInf = ({todos,completedTodos})=> {
    
    console.log({todos})
    return (
    <>
    <h3 className="TodoInf"> {completedTodos.length} de {todos.length} Todos completados </h3>
    
    </>
);

}

export default TodoInf