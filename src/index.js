import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './routes/Home';
import Games from './componente/Games';
import About from './routes/About';
import User from './componente/User';
import 'animate.css';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='games' element={<Games />} />
          <Route path='games/:id' element={<User/>} /> 
          <Route path='about' element={<About />} />
        </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


