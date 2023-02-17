import React, {useState} from 'react'

export const useForm = (obj = {}) => {
 
    //Estados
    const [formulario, setFormulario] = useState({obj});

    //Métodos
    const serializarFormulario = (formulario) => {

        //Obtengo el formulario
        const formData = new FormData(formulario);

        //Objeto nuevo 
        const objetoCompleto = {};

        //Itero sobre el formData desestructurando [name] del input y su value
        for (let [name, value] of formData){
            objetoCompleto[name] = value;
        }

        return objetoCompleto;
    };

    //Recupero todo lo ingresado en un objeto y lo seteo al Estado
    const enviado = e => {
        e.preventDefault();

        let data = serializarFormulario(e.target);
        setFormulario(data);
    }

    //Actulizo el estado

    const actulizado = e => {
        setFormulario({
            ...formulario,
            [e.target.name] : e.target.value
        });
    };

    
    return(
        enviado,
        actulizado,
        formulario
    );
};
