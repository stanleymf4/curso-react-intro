import logo from './platzi.webp';
import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

/* como renderizar varios elementos con array*/
const defaultTodos = [
  { text: 'Cortar cebollas',completed: true },
  { text: 'Tomar el curso de React',completed: false },
  { text: 'Revisar cuaderno de pendientes',completed: false },
  { text: 'Comprar libro a Mariana',completed: false },
]

function App() {
  return (
    <>

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

    </>
  );
}

export default App;
