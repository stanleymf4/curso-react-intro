import './TodoSearch.css'

function TodoSearch() {
    return (
      <input 
        placeholder="Cortar cebolla" 
        className='TodoSearch'
        onChange={
          (event) => {
            console.log('Escribistes en el TodoSearch')
            console.log(event)
            console.log(event.target)
          }
        }
      />
    )
  }

export { TodoSearch }