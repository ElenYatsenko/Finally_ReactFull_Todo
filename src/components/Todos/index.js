import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ReactSwitch from "react-switch";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodosActions from "./TodosActions";
import useTheme from "../../hooks/useTheme";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const { theme, toggleTheme } = useTheme();

  const addTodoHandler = (text) => {
    if (text.length) {
      const newTodo = {
        text,
        isCompleted: false,
        id: uuidv4(),
      };
      setTodos([...todos, newTodo]);
    }
  };

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      )
    );
  };

  const resetTodosHandler = () => {
    setTodos([]);
  };
  const deleteCompletedTodosHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  };

  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length;
  return (
    <div className={`App ${theme}`}>
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      {!!todos.length && (
        <TodosActions
          completedTodosExist={!!completedTodosCount}
          resetTodos={resetTodosHandler}
          deleteCompletedTodos={deleteCompletedTodosHandler}
        />
      )}
      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHandler}
      />
      {completedTodosCount > 0 && (
        <h2>{`You have completed ${completedTodosCount} 
        
        ${completedTodosCount > 1 ? "todos" : "todo"}
        `}</h2>
      )}
      <div className="switch">
        <label>{theme === "light" ? "Light Mode" : "Dark Mode"}</label>
        <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
      </div>
    </div>
  );
};

export default Todos;
