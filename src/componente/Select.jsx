import { useState, useEffect } from "react";
import GetBreeds from "./GetBreeds";



const InitialBreeds = [
    {
        id: 1,
        name: "Husty",
    },
    {
        id: 2,
        name: "Boxer",
    }
];

const Select = ({ UpdateDog }) => {

    const [breeds, setBreeds] = useState(["InitialBreeds"]);
    const [error, setError] = useState(null);

    useEffect(() => {

        UpdateBreeds();

    }, []);

    const UpdateBreeds = () => {
        GetBreeds()
            .then((newBreeds) => {
                setBreeds(newBreeds);
            })
            .catch((error) => {
                
                setError("Error al cargar las Razas")

            })
    }


    


    return (
        <>          
                <select onChange={(e) => UpdateDog(e.target.value)} className="p-2">
                    {breeds.map((breed) => (
                        <option value={breed.id} key={breed.id}> {breed.name} </option>

                    ))}
                </select>
               

        </>
    )
}

export default Select;