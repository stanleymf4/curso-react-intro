import logo from './platzi.webp';
import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';



function App() {

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
    
  )
}

export default App;
