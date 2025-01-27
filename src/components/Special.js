import React, { useState } from 'react';
import '../styles/styles.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Special = () => {
    
    return (

        <section id='Special-main-div'>
            <div id='special-inner-div'>
                <div id='left-div'>
                    <p id='left-div-p'><b>TRY IT OUT TODAY</b></p>
                    <h3 id='left-div-h'>MOST POPULAR BURGER</h3>
                </div>
                <div id='right-div'>
                    <div id='right-top-div'><p id='left-div-p'><b>TRY IT OUT TODAY</b></p>
                    <h3 id='left-div-h'>MORE FUN
                    <br />MORE TASTE</h3>
                    </div>
                    <div id='right-bottom-div'>
                    <p id='left-div-p'><b>TRY IT OUT TODAY</b></p>
                    <h3 id='left-div-h'>FRESH & CHILI</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Special;