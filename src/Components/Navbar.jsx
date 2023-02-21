import React from 'react'
import './navbar.css'
import img1 from '../assets/facebook.png'
import logo from '../assets/logo (1).png'
import linkedin from '../assets/linked-icon.png'
import instagram from '../assets/insta.png'

function Navbar() {
    return (
        <>
           
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <div className="container-fluid">
                                <a className="navbar-brand nav-logo" href="#"><img src={logo} alt="" /></a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <a className="nav-link " aria-current="page" href="/">Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link " aria-current="page" href="/about">ABOUT</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link " aria-current="page" href="/services">SERVICES</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link " aria-current="page" href="/contact">CONTACT</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="https://swiftlaw.com.au/signup-as"><button>BOOK APPOINTMENT</button></a>
                                        </li>
                                        <li className="nav-item social-icon">
                                            <a className="nav-link" href="https://www.facebook.com/swiftdocgp"><i class="fa fa-facebook-square" aria-hidden="true"></i></a>
                                        </li>
                                        <li className="nav-item social-icon">
                                            <a className="nav-link" href="https://www.linkedin.com/company/swiftdoc-pty-ltd/?originalSubdomain=au"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                                        </li>
                                        <li className="nav-item social-icon">
                                            <a className="nav-link" href="https://www.instagram.com/swiftdoc/"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </nav>
                 


        </>
    )
}

export default Navbar
