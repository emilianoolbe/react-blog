import {useState, useEffect} from 'react';

export const useAjax = (url, methodCom, objetToSave) => {

    //Estados
	const [estado, setEstado] = useState([]);
    const [loading, setLoading] = useState(true)
    const [errors, setErrors] = useState('');

	//Efectos
	useEffect(() => {
		getData();
	}, [url]);

    //Petición ajax

    const getData = async() => {

        setLoading(true);

        //Segundo argumento en la petición AJAX las opciones - según el methodo defino distintas opciones
        let options = {
            method: 'GET'
        };

        if (methodCom == 'GET' || methodCom == 'DELETE') {
            options = {
                method: methodCom, 
            };
        };

        if (methodCom == 'POST' || methodCom == 'PUT') {

            options = {
                method : methodCom,
                body: JSON.stringify(objetToSave),
                headers: {
                    'Content-Type' : 'application/json'
                } 
            };
        };


            
        const peticion = await fetch(url, options);
        const data = await peticion.json();
    
        if (data.status === 'success') {
            setEstado(data);
            setLoading(false);
        }else{
            setErrors(`Error de conexión a la API - ${data.message}`);
        };
       

    };
    return{
        datos: estado,
        cargando: loading,
        errores: errors
    };
};