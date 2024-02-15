import React, { useState } from 'react'
import './TodoSearch.css'
import { TodoContext } from '../TodoContext';

function TodoSearch() {
  
  const {
    seacrhValue,
    setSeacrhValue,
  } = React.useContext(TodoContext);
  
  return (
      <input 
        placeholder="Cortar cebolla" 
        className='TodoSearch'
        value={seacrhValue}
        onChange={
          (event) => {
            setSeacrhValue(event.target.value)
          }
        }
      />
    )
  }

export { TodoSearch }