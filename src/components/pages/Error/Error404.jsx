import React from 'react';
import { Link } from 'react-router-dom';
import './Error404.css';
export const Error404 = () => {
  return (
    <div className='error-404'>
      <h1>ERROR 404 </h1> <h2>¡Página no encontrada!</h2>
      <Link to='/'><h3>Haga click para volver a inicio</h3></Link>
    </div>
  )
}
