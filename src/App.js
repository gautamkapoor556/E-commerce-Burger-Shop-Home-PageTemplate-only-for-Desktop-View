import React,{useEffect} from 'react';
import Special from './components/Special';
import Menu from './components/Menu';
import Aboutus from './components/Aboutus';
import Contactus from './components/Contactus';
import Footer from './components/footer';
import Newheader from './components/Newheader';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () =>{
  useEffect(() => {
          AOS.init();
      }, []);

  return (
    <div>
      <Newheader />
      <br></br>
      <br></br>
      <br></br>
      <Special />
      <br></br>
      <br></br>
      <br></br>
      <Menu />
      <br></br>
      <br></br>
      <br></br>
      <Aboutus />
      <br></br>
      <Contactus />
      <Footer />
    </div>
  );
};

export default App;