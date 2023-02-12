import React from 'react'
import { Link } from 'react-router-dom';
import './home.css';
export const Home = () => {
  return (
    <div className='home'>
      <div>
        <h1>Blog - MERN Stack</h1>
      </div>

      <div>
          <ol>
            <li>
              <strong>Backend</strong>
              <ul>
                <li>El backend esta contruido con Node JS. + Express + MongoDB, siguiendo la arquitectura de diseño MVC</li>
                <li>Dicho backend esta conformado por una APIRest</li>
                <li>Mediante Express.js se levanta el servidor y se crea el sistema de ruteo para los distintos endpoints de la API</li>
                <li>Con Express-validator se realizan distintas validaciones antes de que llegue la infromación a la base de datos</li>
                <li>Con el pre-procesador de archivos Multer, se valida el mimetype de lo ingresado al formulario para poder posteriormente almacenar dicho archivo en memoria</li>
                <li>Con el post-procesador de archivos Sharp, se redimencionan las imagenes ingresadas para luego almacenarlas físicamente</li>
                <li>Utilizando el ORM Mongoose se interactua con la base de datos, se realiza un CRUD completo de los articulos mediante la herramienta POSTMAN</li>
              </ul>
            </li>
            <li>
            <strong>Frontend</strong>
              <ul>
                <li>El frontend esta contruido integramente con React + CSS</li>
                <li>Mediante React se gestiona todo el maquetado de la aplicación en diversos componentes</li>
              </ul>
            </li>
          </ol>
      </div>
      <button><Link to='/articles'>Ver Artículos</Link></button>
    </div>
  )
}
