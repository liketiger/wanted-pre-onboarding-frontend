import React, { useEffect } from "react";

const TodoContext = React.createContext([]);

export const TodoContextProvider = props => {
  const [todos, getTodos] = useState([]);
  const [] = useReducer();

  useEffect(() => {
    const fetchTodo = async () => {
      await requestHttp({
        url: '/todos',
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwt')}`
        },
        getValue: getTodos
      });
    };

    fetchTodo();
  });

  return <TodoContext.Provider>{props.children}</TodoContext.Provider>;
}

export default TodoContext;