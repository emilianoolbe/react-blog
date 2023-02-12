import React, { useEffect, useState } from "react";
import { useAjax } from "../../../hooks/useAjax";
import "./articles.css";

export const Articles = () => {
  
  //Estados
  const [url, setUrl] = useState('http://localhost:3010/api/article/all');

  //Hooks
  const {datos, cargando} = useAjax(url);

  return (
    <div className="articles">
 
    {
      datos && datos.map((article, i) => {
        return(
          <article className="article-item" key={i}>
          <div className="mask">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
              alt=""
            />
          </div>
          <div className="datos">
            <h3 className="Title">Article title: {article.title}</h3>
            <p className="description">Article description: {article.content}</p>
            <button className="button">Edit</button>
            <button className="button">Delete</button>
          </div>
        </article>
         
        )
      })
    }    
      
     

    
    </div>
  );
};
