import React, { useState } from 'react';
import '../styles/styles.css';

const Menu = () => {
    

    return (
        <body id='Menu'>
            <br />
            <div id='divv'>
                <button id='buttonn'>ALWAYS TASTEY BURGER</button>

            </div>
            <div id='div-2'>
                <h2 id='font-style'>CHOOSE & ENJOY</h2>
            </div>
            <div id='div'>
                <p id='para'>Whether you crave classic flavors or daring combinations, this is where your culinary journey begins. Indulge your cravings and savor every bite <br />as you create your personalized burger experience with Burger Company
                </p>
            </div>
            <div id='div-3'>
                <div id='div-3-inner'>
                    <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="100" id='in-div-1'>
                        <img id='img-padding' src="../images/order-1.png" alt="" />
                        <br />
                        <h4 id='cart-items-text'><b>Chicken Burger</b></h4>
                        <p id='cart-p'>Sink your teeth into the timeless perfection of our Chicken Burger, an experience that never goes out of style.</p>
                        <button id='cart-button'>ORDER NOW</button>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="500" id='in-div-2'>
                        <img id='img-padding' src="../images/order-2.png" alt="" />
                        <br />
                        <h4 id='cart-items-text'><b>Veggie Delight Burger</b></h4>
                        <p id='cart-p' >Embrace the vibrant flavors of our Veggie Delight Burger, a celebration of freshness and wholesome goodness.</p>
                        <button id='cart-button'>ORDER NOW</button>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="900" id='in-div-3'>
                        <img id='img-padding' src="../images/order-3.png" alt="" />
                        <br />
                        <h4 id='cart-items-text'><b>BBQ Bacon Burger</b></h4>
                        <p id='cart-p'>Indulge in a symphony of smoky, savory flavors with our BBQ Bacon Burger, grilled and topped with crispy bacon.</p>
                        <button id='cart-button'>ORDER NOW</button>
                    </div>
                    <br />
                </div>
            </div>

            <br /><br />
        </body>
    );
};

export default Menu;