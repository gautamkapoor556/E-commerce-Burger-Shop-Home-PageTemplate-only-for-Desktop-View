import React, { useState } from 'react';
import '../styles/styles.css';

const Aboutus = () => {
    return(
        <div  data-aos="fade-zoom-in" data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0" id='aboutus-div'>
            <div id='inner-div-aboutus'>
                <div id='inside-div1'>
                <div id='aboutus-content'>
                    <h2 id='aboutus-discover'>DISCOVER</h2>
                    <h1 id="aboutus-heading">UPCOMIING <br />EVENTS</h1>
                    <p id='aboutus-text'>From exclusive burger tastings and chef collaborations to community outreach initiatives and seasonal celebrations, there's always something special on the horizon at Burger Company. Be the first to know about our upcoming events, promotions, and gatherings as we continue to bring joy and flavor to our cherished customers. Join us in creating memorable moments and delicious memories together!</p>
                </div>
                <br />

                <div id='aboutus-img'>
                    <img src="../images/event.jpg" alt="" />
                </div>

                </div>
            </div>
        </div>
    );
};

export default Aboutus;