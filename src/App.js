import React, { useEffect } from 'react'
import './App.scss'
import Banner from "./Components/Banner/Banner";
import Footer from './Components/Footer/Footer';
import InteractiveSection from './Components/InteractiveSection/InteractiveSection';
import OurCreationsSection from './Components/OurCreationsSection/OurCreationsSection';
import Aos from 'aos'
import "aos/dist/aos.css"

function App() {
  useEffect(() => {
    Aos.init({ duration: 1200 })
  }, [])

  return (
    <div className="App">
      <Banner />
      <InteractiveSection/>
      <OurCreationsSection/>
      <Footer/>
    </div>
  );
}

export default App;
