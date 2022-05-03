import React from 'react'
import { Outlet } from 'react-router-dom';
import NavBar from './componente/NavBar';



const App = () => {

  return (

    <div>
      <NavBar />
      <div className='container mt-4 ms-4'>
       <Outlet />
      </div>
    </div>
  )
}

export default App;
