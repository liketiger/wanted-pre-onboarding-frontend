import { useRef, useContext } from 'react';
import TodoInput from './TodoInput';
import TodoBtn from './TodoBtn';
import TodoContext from '../store/todo-context';

const TodoAdder = () => {
  const addInputValue = useRef(null);
  const todoCtx = useContext(TodoContext);

  const submitHandler = e => {
    e.preventDefault();
    todoCtx.addTodoHandler(addInputValue.current.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <TodoInput ref={addInputValue} />
      <TodoBtn>추가</TodoBtn>
    </form>
  );
};

export default TodoAdder;
