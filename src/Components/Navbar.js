import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <header>
        <div className="container-fluid bg-dark p-0">
            <div className="row gx-0 d-none d-lg-flex">
                <div className="col-lg-7 px-5 text-start">
                    <div className="h-100 d-inline-flex align-items-center py-3 me-3">
                        <a className="text-white px-2" href="tel:+0123456789"><i className="fa fa-phone-alt text-primary me-2"></i>+012 345 6789</a>
                        <a className="text-white px-2" href="mailto:info@example.com"><i className="fa fa-envelope-open text-primary me-2"></i>info@example.com</a>
                    </div>
                </div>
                <div className="col-lg-5 px-5 text-end">
                    <div className="h-100 d-inline-flex align-items-center py-3 me-2">
                        <a className="text-white px-2" href="">Terms</a>
                        <a className="text-white px-2" href="">Privacy</a>
                    </div>
                    <div className="h-100 d-inline-flex gap-1 align-items-center">
                        <a className="btn btn-outline-warning" href=""><i className="fab fa-facebook"></i></a>
                        <a className="btn btn-outline-warning" href=""><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-outline-warning" href=""><i className="fab fa-linkedin-in"></i></a>
                        <a className="btn btn-outline-warning" href=""><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
    </div>
    <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
            <a href="" className="navbar-brand ms-4 ms-lg-0">
                <h1 className="text-brown m-0"><img className="me-3 img-logo" src="img/logo.jpg" alt="Icon"/>Architet</h1>
            </a>
            <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto p-4 p-lg-0">
                    <NavLink to="/" className="nav-item nav-link ">Home</NavLink>
                    <NavLink to="/about" className="nav-item nav-link">About</NavLink>
                    <NavLink to="/service" className="nav-item nav-link">Services</NavLink>
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                        <div className="dropdown-menu border-0 m-0">
                            <a href="/" className="dropdown-item">Dropdown</a>
                        </div>
                    </div>
                    <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink>
                </div>
            </div>
    </nav>
    </header>
    </>
  )
}

export default Navbar