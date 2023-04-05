import { useState } from 'react';
import TodoInput from './TodoInput';
import TodoBtn from './TodoBtn';
import requestHttp from '../utils/fetch-settings';

const TodoAdder = () => {
  const [value, setValue] = useState('');

  const submitHandler = e => {
    e.preventDefault();
    requestHttp({
      url: '/todos',
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json',
      },
      body: { todo: value },
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <TodoInput setValue={setValue} />
      <TodoBtn type='submit' content='추가' />
    </form>
  );
};

export default TodoAdder;
