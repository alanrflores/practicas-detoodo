import React, { useEffect, useState } from 'react'
import Cards from './Cards';


const Frutas = () => {

  const items = [
    {
      nombre: "Alan",
      apellido: "Flores",
      id: 1,
    }, {
      nombre: "Thomas",
      apellido: "Flores",
      id: 2,
    },
    {
      nombre: "Matias",
      apellido: "Flores",
      id: 3
    }]

  const [comprobate, setComprobate] = useState(false)


  const getItems = async (id) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const item = items.find(item => item.id === id)
        item ? resolve(item, setComprobate(true)) : reject(setComprobate(false))
      }, 2000)
    });

  const buscar = async () => {
    try {
      const item = await getItems(2);

    } catch (error) {
      console.log(error)
    }
  }
 
  useEffect(()=> {
  buscar();
 },[])
 


  return (
    <>
      <h1>Item</h1>
     {comprobate ===  false ? 
       (<h1>Carganding.......</h1>)
    :
      
      <Cards items={items}/>
    } 
    </>
  )
}

export default Frutas