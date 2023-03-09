import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ajax } from "../../../helpers/ajax";
import { global } from "../../../helpers/global";
import { Loading } from "../loading/Loading";
import './article.css';
export const Article = () => {

  //Estados
  const [article, setArticle] = useState({});
  const [loading, setloading] = useState(false);
  const [errors, setErrors] = useState('');

  //Params
  const params = useParams();

  //Efectos
  useEffect(() => {
    getData();
  }, [])

  //Métdodos
  const getData = async () => {
    
    setloading(true);
    const {data} = await ajax(`${global.url}article/${params.id}`, 'GET');

    if (data.status === 'success') {
      setloading(false);
      setErrors('');
      setArticle(data.article);
    
    }else{
      setloading(false);
      setArticle([]);
      setErrors(`Error al cargar articulo${data.message}`)
    }
    
  };

  if (errors !== '') {
    return(
      <h1>{errors}</h1>
    )
  }else if (loading && errors === ''){
    return(
      <>
        <Loading />
      </>
    )
  }else if (article && loading === false && errors === ''){
    return (
      <>
      <div className="article">
        <div className="maskarticle">
          {article.image !== "default.png" && (
            <img src={`${global.url}article/file/${article.image}`} />
          )}
          {article.image === "default.png" && (
            <img src="https://miro.medium.com/v2/resize:fit:400/1*PWe4DmAE78BLD4SHpXizMw.png" />
          )}
        </div>
        <h1>Title: {article.title}</h1>
        <h3>Description: {article.content}</h3>
      </div>
      </>
    );
  };
};
