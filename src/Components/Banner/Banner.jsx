import React from 'react'
import './Banner.scss'
import Navbar from '../Navbar/Navbar'
import Hamburger from '../../Assets/Icons/icon-hamburger.svg'

const Banner = () => {
  return (
    <section className="banner">
      <img
        className="hamburger-menu"
        src={Hamburger}
        alt="Hamburger Button"
      />
      <div className="navbar-box">
        <Navbar />
      </div>
      <div>
        <h1>IMMERSIVE EXPERIENCES THAT DELIVER</h1>
      </div>
    </section>
  )
}

export default Banner
