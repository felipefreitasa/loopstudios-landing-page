import React from 'react'
import './OurCreationsCard.scss'

const OurCreationsCard = ({card_title, card_image, card_image_alt}) => {
   return (
      <div className="our-creations-card" data-aos="zoom-out">
         <img src={card_image} alt={card_image_alt} />
         <p>{card_title}</p>
      </div>
   )
}

export default OurCreationsCard
