import {useState, useEffect} from 'react';

export const useAjax = (url) => {
    //Estados
	const [estado, setEstado] = useState({datos: null, cargando: true});

	//Efectos
	useEffect(() => {
		getData();
	}, [url]);

    //Petición ajax

    const getData = async() => {

        setEstado({...estado, cargando: true});

        const peticion = await fetch(url);
        const {articles} = await peticion.json();

        setEstado({datos: articles, cargando: false});
    };
    return{
        datos: estado.datos,
        cargando: estado.cargando
    };
};