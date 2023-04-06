import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TodoAdder from '../component/todo/TodoAdder';
import TodoList from '../component/todo/TodoList';

const Todo = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('jwt')) navigate('/signin');
  }, []);

  return (
    <>
      <TodoAdder />
      <TodoList />
    </>
  );
};

export default Todo;
