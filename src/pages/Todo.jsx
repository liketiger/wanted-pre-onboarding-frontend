import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TodoAdder from '../component/TodoAdder';
import TodoContext from '../store/todo-context';

const Todo = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('jwt')) navigate('/signin');
  }, []);

  return <TodoContext.Provider>
    <TodoAdder></TodoAdder>
  </TodoContext.Provider>
};

export default Todo;
