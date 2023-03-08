import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './sidebar.css';

export const Sidebar = () => {

  //Estados
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  //Métodos
  const doSearch = e => {
    e.preventDefault();
    
    //Obtengo lo que se busca
    let inputSearch = e.target.search.value;
    
    //haciendo uso del UseNavigate redirecciono a donde yo quiera - Recibe como parámetro 1 la ruta 2 objeto para forzar la redir
    navigate(`/search/${inputSearch}`, {replace: true});
  };

  return (
    <aside className='aside'>

        <form onSubmit={doSearch}>
          <input autoComplete='off'  name='search'  type="text" placeholder='Search'/>
          <input type='submit' value='Search'/>
        </form>
    
    </aside>
  )
}
