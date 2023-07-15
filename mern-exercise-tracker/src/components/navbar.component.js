import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

    render() {
        return (
            <div>
                <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <Link to="/" className="navbar-brand">ExerciseTracker</Link>
                        <div className="collpase navbar-collapse" id="navbarSupportedContent"> 
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link to="/user" className="nav-link">Create User</Link>
                                </li>
                                <li className="navbar-item">
                                    <Link to="/create" className="nav-link">Create Exercise Log</Link>
                                </li>
                                <li className="navbar-item">
                                    <Link to="/" className="nav-link">Exercises</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}