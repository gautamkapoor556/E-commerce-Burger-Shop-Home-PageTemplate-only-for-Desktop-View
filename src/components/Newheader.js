import React, { useEffect } from 'react';
import '../styles/styles.css';

const Newheader = () => {

    return (
        <header id='header'>
            <nav id='navbar'>
                <div id='navbar-div1'>
                    <img src="../images/logo-dark.png" alt="" />
                </div>
                <ul id='flex'>
                    <li><a href="#Home">HOME</a></li>
                    <li><a href="#Special-main-div">SPECIAL</a></li>
                    <li><a href="#Menu">MENU</a></li>
                    <li><a href="#aboutus-div">EVENTS</a></li>
                    <li><a href="#contactus-div">CONTACT US</a></li>
                </ul>
            </nav>
            <div id='banner-main-div'>
                <div id='nav-content'>
                    <div >
                        <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="100" id='dot-content'>
                            <div id='dot-in-div1'>
                                <h1 id='content-h3'>IT IS GOOD TIME FOR THE GREATE TASTE</h1>
                            </div>
                            <div id='dot-in-div1'>
                                <h1 id='content-h4'>OF BURGER</h1>
                            </div>
                        </div>

                        <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="400" id="burger-time-text">
                            <div>
                                <h1 id='content-text-1'>BURGER</h1>
                            </div>
                            <div>
                                <h2 id='content-text-2'>TIME</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-left" data-aos-duration="1500" data-aos-delay="100" id='nav-content'>
                    <img id="nav-img2" src="../images/header.png" alt="" />
                </div>
            </div>
        </header>
    );
};

export default Newheader;
