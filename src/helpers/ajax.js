<<<<<<< HEAD
export const ajax = async (url, methodCom, objetToSave = '', file = false) => {
=======
export const ajax = async (url, methodCom, objetToSave = '', archives = false) => {
>>>>>>> 73127dd44e167b53205d68a81bcff23dfbd1e548

  //Petición ajax

  let loading = true;

  // OPTIONS - Segundo argumento en la petición AJAX - según el method defino distintas opciones
  let options = {
    method: 'GET',
  };

  if (methodCom == 'GET' || methodCom == 'DELETE') {
    options = {
      method: methodCom,
    };
  };

  if (methodCom == 'POST' || methodCom == 'PUT') {

<<<<<<< HEAD
    if (file) {
      options = {
        method: methodCom,
        body: objetToSave,
      };
    }else{
      
      options = {
        method: methodCom,
        body: JSON.stringify(objetToSave),
        headers: {
          "Content-Type": "application/json"
        }
      };
    }
=======
    if (archives) {
      options = {
        method: methodCom,
        body: objetToSave, 
      };
    };
    options = {
      method: methodCom,
      body: JSON.stringify(objetToSave),
      headers: {
        "Content-Type": "application/json"
      }
    };
>>>>>>> 73127dd44e167b53205d68a81bcff23dfbd1e548
  };

  //Asigno al array data la respuesta ajax

    const peticion = await fetch(url, options);
    const data = await peticion.json();
    //Ya no esta cargando, pasa a false
    loading = false;
    return { data, loading };



};
