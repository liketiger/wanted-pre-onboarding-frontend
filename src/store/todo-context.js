import React, { useReducer } from "react";
import requestHttp from "../utils/fetch-settings";
import CONSTANTS from "../utils/constants";

const { getTodo, addTodo, deleteTodo, updateTodo } = CONSTANTS;

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

    await requestHttp(getTodo(fetchTodo));
    dispatchTodo({ type: 'FETCH', todoList: responseData });
  };

  const addTodoHandler = async newTodo => {
    if (newTodo.trim().length === 0) return;
    const addNewTodo = data => {
      responseData = data;
    }

    await requestHttp(addTodo(newTodo, addNewTodo));
    dispatchTodo({ type: 'ADD', newTodo: responseData });
  };

  const deleteTodoHandler = async id => {
    await requestHttp(deleteTodo(id));
    dispatchTodo({ type: 'DELETE', id });
  };

  const completeTodoHandler = async (id, todo, isCompleted) => {
    const completeTodo = () => {};

    await requestHttp(updateTodo(id, todo, isCompleted, completeTodo));
    dispatchTodo({ type: 'COMPLETE', id });
  };

  const updateTodoHandler = async (id, newTodo, isCompleted) => {
    if (newTodo.trim().length === 0) return;
    const updateNewTodo = data => {
      responseData = data;
    };

    await requestHttp(updateTodo(id, newTodo, isCompleted, updateNewTodo));
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