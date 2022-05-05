import React from 'react'
import { Outlet } from 'react-router-dom';

import NavBar from './componente/NavBar';




const App = () => {

  return (

    <div>
      <NavBar />
      <div className='container-fluid mx-auto'>
        <Outlet />
      </div>
    </div>
  )
}

export default App;
