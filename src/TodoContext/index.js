import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

// Beneficios de crar esta función: 
// 1. crear un nombre mas representativo. 
// 2. Encapsular la logica del provider
function TodoProvider ({children}) {

    const {
    item : todos, 
    saveItem : saveTodos,
    loading,
    error,
  } = useLocalStorage(
    'TODOS_V1',
    []
  );
  
  const [seacrhValue, setSeacrhValue] = React.useState(
    ''
  );

  const [openModal, setOpenModal] = React.useState(
    false
  );

  const completedTodos = todos.filter(
    todos => !!todos.completed
  ).length;

  const totalTodos = todos.length;

  const seachedTodos = todos.filter(
    (todo) => {
      return todo.text.toLowerCase().includes(
        seacrhValue.toLowerCase()
      )
    }
  )

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            seacrhValue,
            setSeacrhValue,
            seachedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider }
