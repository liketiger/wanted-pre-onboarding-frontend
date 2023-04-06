import { useState, useRef, useContext } from 'react';
import TodoContext from '../../store/todo-context';
import Button from '../Button';
import Input from '../Input';

const TodoItem = ({ item }) => {
  const [editMode, setEditMode] = useState(false);
  const { id, todo, isCompleted } = item;

  const editRef = useRef(null);
  const todoCtx = useContext(TodoContext);

  const editHandler = () => setEditMode(prev => !prev);
  const deleteHandler = () => todoCtx.deleteTodoHandler(id);
  const completeHandler = () =>
    todoCtx.completeTodoHandler(id, todo, isCompleted);

  const updateHandler = () => {
    editHandler();
    todoCtx.updateTodoHandler(id, editRef.current.value, isCompleted);
  };

  return (
    <li>
      <label>
        <input type='checkbox' onClick={completeHandler} />
        {!editMode && <span>{todo}</span>}
        {editMode && (
          <Input
            type='text'
            defaultValue={todo}
            data-testid='new-todo-input'
            ref={editRef}
          />
        )}
      </label>
      {!editMode && (
        <Button data-testid='modify-button' onClick={editHandler}>
          수정
        </Button>
      )}
      {editMode && (
        <Button data-testid='submit-button' onClick={updateHandler}>
          제출
        </Button>
      )}
      {!editMode && (
        <Button data-testid='delete-button' onClick={deleteHandler}>
          삭제
        </Button>
      )}
      {editMode && (
        <Button data-testid='cancel-button' onClick={editHandler}>
          취소
        </Button>
      )}
    </li>
  );
};

export default TodoItem;
