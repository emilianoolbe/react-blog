import React, { useState } from "react";
import { global } from "../../../helpers/global";
import { useAjax } from "../../../hooks/useAjax";
import { Loading } from "../loading/Loading";
import "./articles.css";

export const Articles = () => {
  //Estados
  const [url, setUrl] = useState(`${global.url}article/all`);

  //Hooks
  const { datos, cargando, errores } = useAjax(url, "GET");

  //JSX
  if (errores && errores !== "") {
    return (
      <div className="articles">
        <h3>{errores}</h3>
      </div>
    );
  }else if (cargando && errores === "") {
    return (
      <div>
        <Loading />
      </div>
    );
  }else if (datos && errores === "" && cargando === false) {
    return (
      <div className="articles">
        {datos.articles.map((article, i) => {
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
                <button className="button">Delete</button>
              </div>
            </article>
          );
        })}
      </div>
    );
  }
};
