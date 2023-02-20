import React, { useEffect, useState } from "react";
import { global } from "../../../helpers/global";
import { ajax } from "../../../helpers/ajax";
import { Loading } from "../loading/Loading";
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
  }, [url])

  useEffect(() => {
    getData();
  }, [articles])

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

  const deleteArticle = async (id) => {

    //Seteo URl
    const urlDelete = (`${global.url}article/${id}`)

    //Eliminar de la db el elemento con el ID
    const {data} = await ajax(urlDelete, 'DELETE')
    
    if (data.status === 'sucess') {
      let {data} = await ajax(url, 'GET');
      let newData = data.filter(article => article._id !== id);
      setArticles(newData);
    }
  }

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
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                  alt=""
                />
              </div>
              <div className="datos">
                <h3 className="Title">Article title: {article.title}</h3>
                <p className="description">
                  Article description: {article.content}
                </p>
                <button className="button">Edit</button>
                <button className="button" onClick={() => {deleteArticle(article._id)}}>Delete</button>
              </div>
            </article>
          );
        })}
      </div>
    );
  }
};
