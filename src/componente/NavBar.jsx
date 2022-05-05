import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
    const imgUrl =
        "https://cdn-icons-png.flaticon.com/512/1451/1451303.png"

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <img
                        src={imgUrl}
                        width="60px"
                        height="50px"
                        alt="logo-games"
                    />
                    <Link className="navbar-brand fw-bold fst-italic ms-4 fs-5" to="/">G.C</Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto text-white me-2">
                            <li className="nav-item">
                                <NavLink className="nav-link active fst-italic" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link  fst-italic" to="/Games">Games</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link  fst-italic" to="About">About us</NavLink>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled  fst-italic">Disabled</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar