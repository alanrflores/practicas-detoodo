import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './index.css';
import App from './App';
import Inicio from './componente/Inicio';
import Games from './componente/Games';
import Nosotros from './routes/Nosotros';
import User from './componente/User';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Inicio />} />
          <Route path='games' element={<Games />} />
          <Route path='games/:id' element={<User/>} /> 
          <Route path='nosotros' element={<Nosotros />} />
        </Route>
    </Routes>

    
    </BrowserRouter>
  </React.StrictMode>
);


