import { useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
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
    <form onSubmit={submitHandler}>
      <Input ref={addInputValue} />
      <Button>추가</Button>
      <Button onClick={logoutHandler}>로그아웃</Button>
    </form>
  );
};

export default TodoAdder;
