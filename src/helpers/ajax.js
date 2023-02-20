export const ajax = async (url, methodCom, objetToSave = '') => {

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

    options = {
      method: methodCom,
      body: JSON.stringify(objetToSave),
      headers: {
        "Content-Type": "application/json"
      }
    };
  };

  //Asigno al array data la respuesta ajax
  const peticion = await fetch(url, options);
  const data = await peticion.json();

  //Ya no esta cargando, pasa a false
  loading = false;
  return { data, loading };
};
