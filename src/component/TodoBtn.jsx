const TodoBtn = props => {
  const { type, content } = props;
  return <button type={type} data-testid="new-todo-add-button">{content}</button>;
};

export default TodoBtn;
