import logo from './platzi.webp';
import React from 'react';
import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

/* como renderizar varios elementos con array*/
const defaultTodos = [
  { text: 'Cortar cebollas',completed: false },
  { text: 'Tomar el curso de React',completed: false },
  { text: 'Revisar cuaderno de pendientes',completed: false },
  { text: 'Comprar libro a Mariana',completed: false },
]

function App() {
  return (
    <React.Fragment>

      <TodoCounter completed={16} total={25} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed = {todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />

    </React.Fragment>
  );
}

export default App;
