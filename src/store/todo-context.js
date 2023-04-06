import React, { useReducer } from "react";
import requestHttp from "../utils/fetch-settings";

const TodoContext = React.createContext({
  todoList: []
});

const initialTodoList = {
  todoList: []
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH':
      return {
        todoList: action.todoList ?? state.todoList
      };
    
    case 'ADD':
      return {
        todoList: [...state.todoList, action.newTodo]
      };

    case 'DELETE':
      return {
        todoList: state.todoList.filter(todo => todo.id !== action.id)
      };

    case 'COMPLETE':
      return {
        todoList: state.todoList.map(todo => todo.id === action.id 
          ? { ...todo, isCompleted: !todo.isCompleted } 
          : todo)
      };

    case 'UPDATE':
      return {
        todoList: state.todoList.map(todo => todo.id === action.newTodo.id 
          ? action.newTodo
          : todo)
      };

    default:
      return initialTodoList;
  }
};

export const TodoProvider = props => {
  const [todoState, dispatchTodo] = useReducer(todoReducer, initialTodoList);

  let responseData = null;

  const fetchTodoHandler = async () => {
    const fetchTodo = data => {
      responseData = data;
    }

    await requestHttp({
      url: '/todos',
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`
      },
      getValue: fetchTodo
    });

    dispatchTodo({ type: 'FETCH', todoList: responseData });
  };

  const addTodoHandler = async newTodo => {
    if (newTodo.trim().length === 0) return;

    const addTodo = data => {
      responseData = data;
    }

    await requestHttp({
      url: '/todos',
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json',
      },
      body: {
        todo: newTodo
      },
      getValue: addTodo
    });

    dispatchTodo({ type: 'ADD', newTodo: responseData });
  };

  const deleteTodoHandler = async id => {
    await requestHttp({
      url: `/todos/${id}`,
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    });

    dispatchTodo({ type: 'DELETE', id });
  };

  const completeTodoHandler = async (id, isCompleted, todo) => {
    const completeTodo = () => {};
    await requestHttp({
      url: `/todos/${id}`,
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json',
      },
      body: {
        todo,
        isCompleted
      },
      getValue: completeTodo
    });

    dispatchTodo({ type: 'COMPLETE', id });
  };

  const updateTodoHandler = async (id, isCompleted, todo) => {
    if (todo.trim().length === 0) return;

    const updateTodo = data => {
      responseData = data;
    };

    await requestHttp({
      url: `/todos/${id}`,
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json',
      },
      body: {
        todo,
        isCompleted
      },
      getValue: updateTodo
    });

    dispatchTodo({ type: 'UPDATE', newTodo: responseData });
  };

  const todoCtx = {
    todoList: todoState.todoList,
    fetchTodoHandler,
    addTodoHandler,
    deleteTodoHandler,
    completeTodoHandler,
    updateTodoHandler
  };

  return <TodoContext.Provider value={todoCtx}>{props.children}</TodoContext.Provider>;
}

export default TodoContext;