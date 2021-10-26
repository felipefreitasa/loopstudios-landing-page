import React from 'react'
import OurCreationsCard from '../OurCreationsCard/OurCreationsCard'
import './OurCreationsSection.scss'
import DeepEarth from '../../Assets/Images/image-deep-earth.jpg'
import SoccerTeam from '../../Assets/Images/image-soccer-team.jpg'
import NightArcade from '../../Assets/Images/image-night-arcade.jpg'
import Grid from '../../Assets/Images/image-grid.jpg'
import Curiosity from '../../Assets/Images/image-curiosity.jpg'
import FromAbove from '../../Assets/Images/image-from-above.jpg'
import PocketBorealis from '../../Assets/Images/image-pocket-borealis.jpg'
import Fisheye from '../../Assets/Images/image-fisheye.jpg'

const OurCreationsSection = () => {
   return (
      <section className="our-creations-section">
         <div className="our-creations-header">
            <h3 data-aos="fade-down">OUR CREATIONS</h3>
            <button data-aos="fade-down">SEE ALL</button>
         </div>
         <div className="our-creactions-cards">
            <OurCreationsCard
               card_title={'DEEP EARTH'}
               card_image={DeepEarth}
            />
            <OurCreationsCard
               card_title={'NIGHT ARCADE'}
               card_image={NightArcade}
            />
            <OurCreationsCard
               card_title={'SOCCER TEAM VR'}
               card_image={SoccerTeam}
            />
            <OurCreationsCard
               card_title={'THE GRID'}
               card_image={Grid}
            />
            <OurCreationsCard
               card_title={'THE CURIOSITY'}
               card_image={Curiosity}
            />
            <OurCreationsCard
               card_title={'FROM UP ABOVE VR'}
               card_image={FromAbove}
            />
            <OurCreationsCard
               card_title={'POCKET BOREALIS'}
               card_image={PocketBorealis}
            />
            <OurCreationsCard
               card_title={'MAKE IT FISHEYE'}
               card_image={Fisheye}
            />
         </div>
         <button data-aos="fade-down">SEE ALL</button>
      </section>
   )
}

export default OurCreationsSection
