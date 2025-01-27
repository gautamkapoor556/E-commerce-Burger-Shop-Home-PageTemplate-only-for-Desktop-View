import React from 'react';
import '../styles/styles.css';

const Contactus = () => {
  

  return (
    <section className="reservation" id="contact">
      <div className="reservation__container">
        <h id='ee'>RESERVATION</h>
        <h2 className="section__header">BOOK YOUR TABLE</h2>
        <form action="/">
          <input type="text" placeholder="NAME" />
          <input type="email" placeholder="EMAIL" />
          <input type="date" placeholder="DATE" />
          <input type="time" placeholder="TIME" />
          <input type="number" placeholder="PEOPLE" />
          <button style={{ backgroundColor: 'red', color: 'white' }} className="btn" type="submit">FIND TABLE</button>
        </form>
      </div>
      <img
        src="../images/reservation.png"
        alt="reservation"
        className="reservation__bg-1"
      />
      <img
        src="../images/reservation2.png"
        alt="reservation"
        className="reservation__bg-2"
      />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </section>
  );
};

export default Contactus;