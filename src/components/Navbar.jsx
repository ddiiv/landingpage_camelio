import React from 'react';
import "../css/NavBar.css"
import logocn from "../img/camelialogo.png"

const Navbar = () => {

    return (
        <header>
            <div class="wrapper">
                <div class="logo-container">
                    <h1 class="logo"> <a href="/" className='link-no'><img src={logocn} alt="camellianaturalsLogo" className='camellianaturalsLogo' /> Camellia<span>Naturals</span></a></h1>
                </div>
                <nav class="main-nav">
                    <ul>
                        <li><a href="/"><i class="fa fa-home nav-icon"></i>Home</a></li>
                        <li><a href="/how"><i class="fa fa-pencil nav-icon"></i>How</a></li>
                        <li><a href="/contactus"><i class="fa fa-envelope nav-icon"></i>Contact Us</a></li>
                    </ul>
                </nav>
                <div class="menu-toggle">
                    <div class="hamburger">
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;