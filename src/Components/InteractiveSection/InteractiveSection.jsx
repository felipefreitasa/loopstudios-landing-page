import React from 'react'
import './InteractiveSection.scss'
import InteractiveImage from '../../Assets/Images/image-interactive.jpg'

const InteractiveSection = () => {
   return (
      <section className="interactive-section">
         <img data-aos="zoom-out" src={InteractiveImage} alt="Men with VR glasses" />
         <div>
            <h2 data-aos="fade-down">THE LEADER IN INTERACTIVE VR</h2>
            <p data-aos="fade-down">Founded in 2011, Loopstudios has been producing world-class virtual reality
               projects for some of the best companies around the globe. Our award-winning
               creations have transformed businesses through digital experiences that bind
               to their brand.</p>
         </div>
      </section>
   )
}

export default InteractiveSection
