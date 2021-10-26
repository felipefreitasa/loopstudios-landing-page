import React from 'react'
import './Footer.scss'
import Logo from '../../Assets/Icons/logo.svg'
import Facebook from '../../Assets/Icons/icon-facebook.svg'
import Instagram from '../../Assets/Icons/icon-instagram.svg'
import Twitter from '../../Assets/Icons/icon-twitter.svg'
import Pinterest from '../../Assets/Icons/icon-pinterest.svg'

const Footer = () => {
   return (
      <footer className="footer">
         <div className="footer-menu">
            <img src={Logo} alt="Loopstudios" />
            <ul>
               <li>About</li>
               <li>Careers</li>
               <li>Events</li>
               <li>Products</li>
               <li>Support</li>
            </ul>
         </div>
         <div className="footer-copyright">
            <div className="footer-social-media">
               <img src={Facebook} alt="Facebook" />
               <img src={Twitter} alt="Twitter" />
               <img src={Instagram} alt="Instagram" />
               <img src={Pinterest} alt="Pinterest" />
            </div>
            <p>© 2021 Loopstudios. All rights reserved.</p>
         </div>
      </footer>
   )
}

export default Footer
