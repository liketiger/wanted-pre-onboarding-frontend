import { useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Input from '../Input';
import Button from '../Button';
import TodoContext from '../../store/todo-context';

const TodoAdder = () => {
  const addInputValue = useRef(null);
  const todoCtx = useContext(TodoContext);
  const navigate = useNavigate();

  const submitHandler = e => {
    e.preventDefault();
    todoCtx.addTodoHandler(addInputValue.current.value);
    addInputValue.current.value = '';
  };

  const logoutHandler = () => {
    localStorage.removeItem('jwt');
    navigate('/signin');
  }

  return (
    <Form onSubmit={submitHandler}>
      <AdderInput ref={addInputValue} />
      <AdderBtn>추가</AdderBtn>
      <LogoutBtn onClick={logoutHandler}>로그아웃</LogoutBtn>
    </Form>
  );
};

const Form = styled.form`
  margin-top: 10px;
  position: relative;
`;

const AdderInput = styled(Input)`
  width: 250px;
  margin: 10px;
  height: 30px;

  &:focus {
    border: 1px solid blue;
  }
`;

const AdderBtn = styled(Button)`
  width: 60px;
  height: 30px;
  font-size: 15px;
  background-color: skyblue;
  color: white;
`;

const LogoutBtn = styled(Button)`
  position: absolute;
  top: -18px;
  right: -12px;
  color: blue;
  background: transparent;
  box-shadow: none;
  font-size: 15px;
  font-weight: 400;
`;

export default TodoAdder;
