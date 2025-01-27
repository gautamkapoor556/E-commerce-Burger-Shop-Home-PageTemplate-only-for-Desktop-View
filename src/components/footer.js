import React, { useState } from 'react';
import '../styles/styles.css';

const Footer = () => {
    


    return (
        <section id='footer'>
            <div id='logo-div-footer'>
                <div>
                    <img id='footerlogo' src="./images/logo-white.png" alt="" />
                    <div id='main-footer'>
                        <p id='footertext'>Welcome to Burger Company, where passion for exceptional food <br /> and genuine hospitality come together. Our story is one of <br /> dedication to crafting the perfect burger experience, from sourcing <br /> the finest ingredients to delivering unparalleled taste in every bite.</p>
                        <div id='footerlogos'>
                            <div id='footerlogos-div'>
                            <p id='footerlocationtext'>MG Road, Bangalore, 500089</p>
                            <p id='footerlocationtext'>info@burgerhouse.com</p>
                            </div>
                            

                        </div>
                        <div class="footer-logo">
                        <i class="fa fa-envelope"></i>
                        <i class="fa-brands fa-whatsapp"></i>
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-instagram"></i>
                    </div>
                    </div>
                </div>
                <div id='copyright'>
                    <p id='copyright-text'>Copyright © 2024 Web Code Journey. All rights reserved.</p>
                </div>
            </div>
        </section>
    );
};

export default Footer;