import React, { useState } from 'react'
import './TodoSearch.css'

function TodoSearch({
  seacrhValue,
  setSeacrhValue
}) {
  
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