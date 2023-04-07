import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import InnerWrapper from '../component/InnerWrapper';
import TodoAdder from '../component/todo/TodoAdder';
import TodoList from '../component/todo/TodoList';

const Todo = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('jwt')) navigate('/signin');
  }, []);

  return (
    <InnerWrapper>
      <TodoAdder />
      <TodoList />
    </InnerWrapper>
  );
};

export default Todo;
