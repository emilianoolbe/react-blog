import React, { useEffect, useState } from "react";
import { global } from "../../../helpers/global";
import { ajax } from "../../../helpers/ajax";
import { Loading } from "../loading/Loading";
import { Link } from "react-router-dom";
import "./articles.css";

export const Articles = () => {

  //Estados
  const [articles, setArticles] = useState([]);
  const [errors, setErrors] = useState('');
  const [loading, setloading] = useState([]);
  const [url, setUrl] = useState(`${global.url}article/all`);

  //Efectos
  useEffect(() => {
    getData();
  }, [])

  //Helpers && Métodos 
  const getData = async () => {
    
    const { data, loading } = await ajax(url, "GET");

    if (data.status == 'success') {
      setArticles(data.articles);
      setloading(loading);
    }else{
      setErrors(`Error en la conexión con la API - ${data.message}`);
    };
  };

  
  //Eliminar de la db el elemento con el ID
  const deleteArticle = async (id) => {

    //Seteo URl
    const urlDelete = (`${global.url}article/${id}`)

    const {data} = await ajax(urlDelete, 'DELETE')
    
    //Vuelvo a actualizar el estado de artículos al eliminar uno
    if (data.status === 'success') {
     
      //filtro elementos
      let updatedArticles = articles.filter(element => element._id !== id);
      setArticles(updatedArticles);
    };
  };

  //JSX
  if (errors && errors !== "") {
    return (
      <div className="articles">
        <h3>{errors}</h3>
      </div>
    );
  }else if (loading && errors === "") {
    return (
      <div>
        <Loading />
      </div>
    );
  }else if (articles && errors === "" && loading === false) {
    return (
      <div className="articles">
        {articles.map((article, i) => {
  
          return (
            <article className="article-item" key={i}>
              <div className="mask">
                {
                  article.image !== 'default.png' && <img src={`${global.url}article/file/${article.image}`} />
                }
                {
                  article.image === 'default.png' && <img src="https://miro.medium.com/v2/resize:fit:400/1*PWe4DmAE78BLD4SHpXizMw.png" />
                }
                
              </div>
              <div className="datos">

                <Link to={`/article/${article._id}`}>
                  <h3 className="Title"> {article.title}</h3>
                </Link>
                
                <h3 className="description">
                 <strong>Description:</strong>
                </h3>
                <p>{article.content}</p>

                <Link to={`/edit/${article._id}`}>
                  <button className="button" > Edit</button>
                </Link> 

                <button className="button" onClick={() => {deleteArticle(article._id)}}>Delete</button>
              </div>
            </article>
          );
        })}
      </div>
    );
  }
};
