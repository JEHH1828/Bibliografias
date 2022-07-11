import React from "react";
import {Link} from 'react-router-dom'
import Switch from 'react-router-dom'
import {BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
    return(
        <div>
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg ">
                <div className="container-fluid">
                    <img width="90px" src="https://cdn-icons-png.flaticon.com/512/3081/3081329.png" className="navbar-brand" alt=""></img>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="../../" className="nav-link active" aria-current="page" >Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="/src/html/get-start.html" className="nav-link" >Get Start</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://github.com/JEHH1828">Github</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://github.com/JEHH1828/Blibliografias">Documentación</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
    
}

export default Navbar