import Select from "./componente/Select";
import { useEffect, useState } from "react";
import Cards from "./componente/Cards";
import GetDog from "./componente/GetDog";

const InitialDog = {
    image:"https://th.bing.com/th/id/R.008f7e9af004fa5f5edc3a7d2d567150?rik=uDlpW4oWwFlWtA&riu=http%3a%2f%2fwww.mascotahogar.com%2fImagenes%2ffondo-romantico-de-perros.jpg&ehk=vdU33BpLi3urjuV1F6fOsAbkLBkcsAv%2fgBbObgfWgTo%3d&risl=&pid=ImgRaw&r=0",
    breed: {
        id:"1",
        name:"breeds",
        temperament:""
    }
}

const App = () => {

 const [dog, setDog] = useState(InitialDog);
 const [loading, setLoading] = useState(false);

 useEffect ( ()=> {
   UpdateDog()
 },[])

  const UpdateDog =(breedId)=> {
      setLoading(true)
      GetDog(breedId)
       .then((newDog)=>{
         setDog(newDog)
         setLoading(false)
         //console.log(newDog)
         
       })
  }

//Pasamos info de actualizacion en Cards para que cuando hagamos click en la imagen nos traiga otra imagen
//Pero con la misma raza.

    return (
        <>

            <div className="container mt-5 d-flex justify-content-center">
                <Select UpdateDog={UpdateDog} />  
            </div>
            <Cards dog={dog} UpdateDog={UpdateDog} loading={loading} />


        </>
    )
}

export default App;