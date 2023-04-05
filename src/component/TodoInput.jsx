const TodoInput = props => {
  const { setValue } = props;
  const changeHandler = e => setValue(e.target.value);
  return (
    <input type='text' data-testid='new-todo-input' onChange={changeHandler} />
  );
};

export default TodoInput;
