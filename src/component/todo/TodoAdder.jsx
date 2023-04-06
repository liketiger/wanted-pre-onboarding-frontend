import { useRef, useContext } from 'react';
import Input from '../Input';
import Button from '../Button';
import TodoContext from '../../store/todo-context';

const TodoAdder = () => {
  const addInputValue = useRef(null);
  const todoCtx = useContext(TodoContext);

  const submitHandler = e => {
    e.preventDefault();
    todoCtx.addTodoHandler(addInputValue.current.value);
    addInputValue.current.value = '';
  };

  return (
    <form onSubmit={submitHandler}>
      <Input ref={addInputValue} />
      <Button>추가</Button>
    </form>
  );
};

export default TodoAdder;
