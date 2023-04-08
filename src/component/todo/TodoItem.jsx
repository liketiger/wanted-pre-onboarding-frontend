import { useState, useRef, useContext, useEffect } from 'react';
import styled, { css } from 'styled-components';
import TodoContext from '../../store/todo-context';
import Button from '../Button';
import Input from '../Input';

const TodoItem = ({ item, index }) => {
  const [editMode, setEditMode] = useState(false);
  const { id, todo, isCompleted } = item;

  const editRef = useRef(null);
  const todoCtx = useContext(TodoContext);

  useEffect(() => {
    if (editMode) editRef.current.focus();
  }, [editMode]);

  const editHandler = () => setEditMode(prev => !prev);
  const deleteHandler = () => todoCtx.deleteTodoHandler(id);
  const completeHandler = () =>
    todoCtx.completeTodoHandler(id, todo, !isCompleted);

  const updateHandler = () => {
    editHandler();
    todoCtx.updateTodoHandler(id, editRef.current.value, isCompleted);
  };

  return (
    <Item>
      <TodoLabel>
        <CheckBox type='checkbox' id={`check${index}`} onClick={completeHandler} defaultChecked={isCompleted}/>
        <CheckLabel htmlFor={`check${index}`} />
        {!editMode && <TodoText isCompleted={isCompleted}>{todo}</TodoText>}
        {editMode && (
          <UpdateInput
            type='text'
            defaultValue={todo}
            data-testid="modify-input"
            ref={editRef}
          />
        )}
      </TodoLabel>
      <TodoBtnWrapper>
        {!editMode && (
          <TodoBtn data-testid='modify-button' onClick={editHandler}>
            수정
          </TodoBtn>
        )}
        {editMode && (
          <TodoBtn data-testid='submit-button' onClick={updateHandler}>
            제출
          </TodoBtn>
        )}
        {!editMode && (
          <TodoBtn data-testid='delete-button' onClick={deleteHandler}>
            삭제
          </TodoBtn>
        )}
        {editMode && (
          <TodoBtn data-testid='cancel-button' onClick={editHandler}>
            취소
          </TodoBtn>
        )}
      </TodoBtnWrapper>
    </Item>
  );
};

const Item = styled.li`
  margin: 20px 0;
  height: 40px;
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CheckBox = styled.input`
  display: none;

  &:checked {
      & + label {
        background-color: #707070;
      }
      & + label::after {
      content:'✔';
      font-size: 20px;
      width: 30px;
      height: 30px;
      text-align: center;
      position: absolute;
      left: -2px;
      top: 3px;
      color: white;
    }
  }
`;

const CheckLabel = styled.label`
  display: inline-block;
  width: 30px;
  height: 30px;
  border: 3px solid #707070;
  border-radius: 50%;
  position: relative;
  margin-right: 10px;

  &:hover {
    background-color: #A0A0A0;
  }
`;

const TodoText = styled.span`
  ${props => props.isCompleted && css`
    text-decoration: line-through;
  `}
`;

const TodoBtn = styled(Button)`
  font-size: 15px;
  background-color: ${props => 
    props['data-testid'].includes('delete') || props['data-testid'].includes('cancel') 
    ? '#FF3300' 
    : 'skyblue'};
  color: ${props => 
    props['data-testid'].includes('delete') || props['data-testid'].includes('cancel') 
    ? 'white' 
    : '#696969'};
  width: 50px;
  height: 30px;
  margin-right: 10px;
  border-radius: 5px;
`;

const TodoBtnWrapper = styled.div`
  margin-right: 15px;
`;

const UpdateInput = styled(Input)`
  height: 30px;
`;

const TodoLabel = styled.label`
  display: flex;
  height: 40px;
  align-items: center;
`;

export default TodoItem;
