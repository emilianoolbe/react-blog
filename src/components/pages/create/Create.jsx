import React, { useState } from "react";
import { global } from "../../../helpers/global";
import { ajax } from "../../../helpers/ajax";
import { useForm } from "../../../hooks/useForm";
import { Loading } from "../loading/Loading";
import "./create.css";

export const Create = () => {
  //Estados
  const [resultado, setResultado] = useState(false);
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

    //Resultados de la petición + subida de IMG
    if (data.status === "success") {
      
      setResultado(true);
      setloading(false);

      //Recupero el input de la img
      const fileInput = document.querySelector('#file');
     
      //Agrego la imagen al formData
      const formData = new FormData();
      formData.append('file', fileInput.files[0]);
      
      //Hago la petición AJAX - body sin el stringify porque es un archivo
      const subidaFile = ajax(`${global.url}article/file/${data.articles._id}`, 'POST', formData, true)
      
    } else if (data.status === "Error") {
      setResultado(false);
      setloading(false);
    };
  };


  //JSX

    return (
      <>
      
      {
        loading === true ?  <Loading  /> : ''
      }

      <div className="create">
        <h2>Add new article </h2>
          {
            resultado === true ? ( <h2 className="success">¡Artículo guardado con éxito!</h2>) : ''
          }
          {
            resultado === false ? (<h2 className="success"> Error al guardar el artículo</h2>) : ''
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
          <input type='file' name="file" id="file" />
          <input type="submit" value="Guardar" />
        </form>
      </div>
      </>
    );
  
};
