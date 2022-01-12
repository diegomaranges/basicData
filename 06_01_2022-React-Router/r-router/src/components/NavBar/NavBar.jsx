import React from 'react';
import { Link } from "react-router-dom";
import { home, movies, NavbarToggler as NT } from "../Utils/Utils";

const Nav = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={home}>Logo</Link>
                    <NT></NT>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to={home}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={movies}>Movies</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Nav;