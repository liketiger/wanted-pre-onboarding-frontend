import { useState, useRef, useContext } from "react";
import TodoContext from "../store/todo-context";
import TodoBtn from "./TodoBtn";
import TodoInput from "./TodoInput";

const TodoItem = ({ item }) => {
  const { id, isCompleted, todo } = item;
  const [editMode, setEditMode] = useState(false);
  const editRef = useRef(null);
  const todoCtx = useContext(TodoContext);
  const editHandler = () => setEditMode(prev => !prev);
  const deleteHandler = () => todoCtx.deleteTodoHandler(id);
  const completeHandler = () => todoCtx.completeTodoHandler(id, isCompleted, todo);
  const updateHandler = () => {
    editHandler();
    todoCtx.updateTodoHandler(id, isCompleted, editRef.current.value);
  }

  return (
    <li>
      <label>
        <input type="checkbox" onClick={completeHandler} />
        {!editMode && <span>{todo}</span>}
        {editMode && <TodoInput type="text" defaultValue={todo} data-testid="new-todo-input" ref={editRef} />}
      </label>
      {!editMode && <TodoBtn data-testid="modify-button" onClick={editHandler}>수정</TodoBtn>}
      {editMode && <TodoBtn data-testid="submit-button" onClick={updateHandler}>제출</TodoBtn>}
      {!editMode && <TodoBtn data-testid="delete-button" onClick={deleteHandler}>삭제</TodoBtn>}
      {editMode && <TodoBtn data-testid="cancel-button" onClick={editHandler}>취소</TodoBtn>}
    </li>
  )
}

export default TodoItem;