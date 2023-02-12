import React from 'react'
import './search.css';

export const Search = () => {
  return (
    <aside className='aside'>

        <form>
          <input autoComplete='off'  name='search'  type="text" placeholder='Search'/>
          <input type='submit' value='Buscar'/>
        </form>
    
    </aside>
  )
}
