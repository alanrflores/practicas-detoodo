import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fst-italic">
                <div className="container-fluid">
                    <Link className="navbar-brand ms-2" to={"/"}>GamesCode</Link>
                    <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-start" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item me-4">
                                <NavLink className="nav-link me-5" aria-current="page" to="/">Inicio</NavLink>
                            </li>
                            <li className="nav-item me-4">
                                <NavLink className="nav-link me-5" to="/Games">Games</NavLink>
                            </li>
                            <li className="nav-item me-4">
                                <NavLink className="nav-link me-5" to="/Nosotros">Nosotros</NavLink>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar