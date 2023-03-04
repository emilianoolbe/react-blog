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

    // ---> Resultados de la petición <---

    if (data.status === "success") {
      
      setResultado(true);
      setloading(false);

      // --> Guardado de img <--

      //Campturo el input 
      const fileInput = document.querySelector('#file');
      
      //Agrego al formData la img con apped
      const formData = new FormData();
      formData.append('file', fileInput.files[0]); // Append recibe el name del input y el valor

      //Petición ajax
      const upload = await ajax(`${global.url}article/file/${data.article._id}`, 'POST', formData, true)

      console.log(upload.data);



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
            resultado ? (<h2 className="success">¡Artículo guardado con éxito!</h2>) : "" 
          }
          {
            resultado && resultado === false ? (<h2 className="success"> No se ha podido guardar el artículo</h2>) : ""
          }
          {
            loading && loading === true ? <div> <Loading /> </div> : ''
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
