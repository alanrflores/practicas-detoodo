
const GetDog = async (breedId) => {
        //traer un dog de acuerdo a la raza
        //si es undefined o me devuelve 0
        //Si esto es cierto traer un dog aleatorio y si no, traer otra url , ya no pueden ser const
        //La declaramos previamente a los if como una variable.
        //Una vez puesto el parametro y sumarlo a la url, hacemos un cambio en la funcion de actualizacion
        let url;
        if (!breedId || breedId === 0) {
        url = "https://api.thedogapi.com/v1/images/search";
        } else {
        url = "https://api.TheDogAPI.com/v1/images/search?breed_ids="+ breedId;
        }
        //formas mas elegante con operador ternario
        //const url = !breedId || breedId === 0
               // ? "https://api.thedogapi.com/v1/images/search"
               // : "https://api.TheDogAPI.com/v1/images/search?breed_ids=" + breedId;


        const res = await fetch(url);
        const [data] = await res.json();
        //para no tener conflictos a la url le agregamos un alias y si tenemos 2 iguales lo resumimos a 1.     
        let { url: image, breeds: [breed] } = data;
        //Manejando errores.
        //poniendole valor por defecto.
        if (!breed) {
                breed = {
                        id: 0,
                        name: "random"
                }
        }

        //console.log(data)    
        //construir el dog , basandose en el InitialDog
        //Extraemos los valores de la data
        //comenzamos mostrando con el console.log(data)
        //Necesito quitar esos array de corchetes para limpiar el contenido que quiero. con [0] jugar con el indice,
        // y usar destructuracion. cerrando [data] "Lo que tengas en la posicion 0 me lo asignes en la variable"
        //Ahora necesitamos extraer los demas parametros. con una destructuracion
        const dog = {
                image,
                breed,
        }
        //Con este console vemos las cosas formateadas. 
        //Del objeto data traemos las breeds , como es un array le ponemos un alias y destructuramos el contenido de 
        //arrays y le decimos que en la posicion 0 sea renombrado a breed "breeds seria lo que hay en el arrays"
        //[breed seria en la posicion 0]
        //console.log(dog)

        return dog;
};
export default GetDog;
