import logo from './platzi.webp';
import React from 'react';
import { useLocalStorage } from './useLocalStorage';
import { AppUI } from './AppUI';

/* como renderizar varios elementos con array*//* 
const defaultTodos = [
  { text: 'Cortar cebollas',completed: true },
  { text: 'Tomar el curso de React',completed: false },
  { text: 'Revisar cuaderno de pendientes',completed: false },
  { text: 'Comprar libro a Mariana',completed: false },
]

localStorage.setItem('TODOS_V1',JSON.stringify(defaultTodos)) */

function App() {

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
    <AppUI 
      loading = {loading}
      error = {error}
      completedTodos = {completedTodos}
      totalTodos = {totalTodos}
      seacrhValue = {seacrhValue}
      setSeacrhValue = {setSeacrhValue}
      seachedTodos = {seachedTodos}
      completeTodo = {completeTodo}
      deleteTodo = {deleteTodo}
    />
  )
}

export default App;
