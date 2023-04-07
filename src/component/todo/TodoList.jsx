import { useContext, useEffect } from "react"
import styled from "styled-components";
import TodoContext from "../../store/todo-context"
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todoCtx = useContext(TodoContext);

  useEffect(() => {
    if (localStorage.getItem('jwt')) todoCtx.fetchTodoHandler();
  }, []);

  return (
    <ListWrapper>
      {todoCtx.todoList.map((todo, index) => <TodoItem key={todo.id} item={todo} index={index} />)}
    </ListWrapper>
  )
};

const ListWrapper = styled.ul`
  text-align: left;
  padding-left: 30px;
`;

export default TodoList;
