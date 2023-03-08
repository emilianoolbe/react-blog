import React, { useState } from "react";
import { global } from "../../../helpers/global";
import { ajax } from "../../../helpers/ajax";
import { useForm } from "../../../hooks/useForm";
import { Loading } from "../loading/Loading";
import "./create.css";

export const Create = () => {
  //Estados
  const [resultado, setResultado] = useState('');
  const [loading, setloading] = useState("");

  //Hooks
  const { formulario, actualizado } = useForm({});

  const storeArticle = async (e) => {
    e.preventDefault();

    //Carga del loading
    setloading(true);

    //Obtengo la información del formulario
    let nuevoArticulo = formulario;

    //Guardado en backend de la información  Hooks
    const { data } = await ajax(
      `${global.url}article/create`,
      "POST",
      nuevoArticulo
    );

    // ---> Resultados de la petición <---

    if (data.status === "success") {
      
      setloading(false);
      setResultado(true)

      // --> Guardado de img <--

      //Campturo el input 
      const fileInput = document.querySelector('#file');
    
      //Agrego al formData la img con append
      const formData = new FormData();
      formData.append('file2', fileInput.files[0]); // Append recibe el name del input y el valor

      //Petición ajax
      const upload = await ajax(`${global.url}article/file/${data.article._id}`, 'POST', formData, true);

      if (upload.data.status === 'Error') {
        setResultado('Las extensiones aceptadas son .png .gif .jpg .jpeg');
      };

    }else {
      setResultado(false);
      setloading(false);
    };
  };

  //JSX
    return (
      <>
      <div className="create">

        <h2>Add new article </h2>
          {
            resultado === false ? (<h2 className="success"> No se ha podido guardar el artículo :| </h2>) : ""
          }
          {
            resultado === true ? (<h2 className="success">¡Artículo guardado con éxito!</h2>) : "" 
          }
          {
            resultado === 'Las extensiones aceptadas son .png .gif .jpg .jpeg' ? (<h2 className="success">¡Artículo guardado con éxito! Pero hubo un error al cargar la imagen</h2>) : "" 
          }
          {
            loading === true ? <div> <Loading /> </div> : ''
          }

        <form onSubmit={storeArticle}>
          <input
            onChange={actualizado}
            type="text"
            name="title"
            id="title"
            placeholder="Title"
          />
          <input
            onChange={actualizado}
            type="text"
            name="content"
            id="content"
            placeholder="Content"
          />
          <input 
            type='file' 
            name="file2" 
            id="file" 
          />
          <input 
            type="submit" 
            value="Save" 
          />

        </form>
      </div>
      </>
    );
};
