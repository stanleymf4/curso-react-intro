import React from 'react';
import './App.css';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton/index';
import { TodosLoading } from '../TodosLoading'
import { TodosError } from '../TodosError'
import { EmptyTodos } from '../EmptyTodos'

function AppUI({
    loading,
    error,
    completedTodos,
    totalTodos,
    seacrhValue,
    setSeacrhValue,
    seachedTodos,
    completeTodo,
    deleteTodo
}) {

    return (
        <>
          <TodoCounter completed={completedTodos} total={totalTodos} />
          <TodoSearch 
            seacrhValue = {seacrhValue}
            setSeacrhValue = {setSeacrhValue}
          />
    
          <TodoList>
          {loading && (
            <>
                <TodosLoading />
                <TodosLoading />
                <TodosLoading />
            </>
            )}
            {error && <TodosError />}
            {(!loading && seachedTodos.length === 0) && <EmptyTodos />}

            {seachedTodos.map(todo => (
              <TodoItem 
                key={todo.text} 
                text={todo.text}
                completed = {todo.completed}
                onComplete={() => completeTodo(
                  todo.text
                )}
                onDelete={() => deleteTodo(
                  todo.text
                )}
              />
            ))}
          </TodoList>
    
          <CreateTodoButton />
    
        </>
      );

}

export { AppUI }