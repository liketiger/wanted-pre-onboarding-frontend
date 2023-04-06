import { useContext, useEffect } from "react"
import TodoContext from "../../store/todo-context"
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todoCtx = useContext(TodoContext);

  useEffect(() => {
    if (localStorage.getItem('jwt')) todoCtx.fetchTodoHandler();
  }, []);

  return (
    <>
      {todoCtx.todoList.map(todo => <TodoItem key={todo.id} item={todo} />)}
    </>
  )
};

export default TodoList;
