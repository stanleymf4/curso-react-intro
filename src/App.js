import logo from './platzi.webp';
import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';

/* como renderizar varios elementos con array*/
const defaultTodos = [
  { text: 'Cortar cebollas',completed: true },
  { text: 'Tomar el curso de React',completed: false },
  { text: 'Revisar cuaderno de pendientes',completed: false },
  { text: 'Comprar libro a Mariana',completed: false },
]

function App() {
  
  const [todos, setTodos] = React.useState(defaultTodos);
  
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
  
  return (
    <>

      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch 
        seacrhValue = {seacrhValue}
        setSeacrhValue = {setSeacrhValue}
      />

      <TodoList>
        {seachedTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed = {todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />

    </>
  );
}

export default App;
