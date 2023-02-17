import React, { useState } from 'react';
import { global } from '../../../helpers/global';
import { useAjax } from '../../../hooks/useAjax';
import { useForm } from '../../../hooks/useForm';
import './create.css';

export const Create = () => {

  //Estados
  const [url, setUrl] = useState(`${global}article/create`);
  const [resultado, setResultado] = useState(false);

  //Hooks
  const {enviado, actualizado, formulario} = useForm({});
  
  //Obtengo la información del formulario
  let nuevoArticulo = JSON.stringify(formulario)
  
  //Guardado en backend de la información  Hooks
  const {datos} = useAjax(url, 'POST', nuevoArticulo);
  
    

  if (datos.status == 'success') {
    setResultado(true);
  }

  

  return (
    <div className='create'>
      <h2>Add new article</h2>

        {resultado ? <h2>Artículo guardado con éxito!</h2> : ''}
          <form onSubmit={enviado}>
            <input onChange={actualizado} type="text" name="title" id="title" placeholder='Title'/>
            <input  onChange={actualizado} type="text" name="content" id="content" placeholder='Content'/>
            <input type="file" name="file" id="file" />
            <input type="submit" value='Guardar' />
      </form>

    </div>
  )
}
