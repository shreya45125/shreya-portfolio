import React from 'react'
import './Footer.css'
import logo from '../../assets/shreya-logo.svg'
import user_icon from '../../assets/user_icon.svg'
import {FaInstagram, FaGithub, FaWhatsapp} from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
            <img src={logo} alt="" />
            <p>I am a frontend developer as well as app developer</p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user_icon} alt="" />
                <input type="email" placeholder='Enter your email' />
            </div>
            <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="social-icons">
        <a
          href="https://www.instagram.com/shreya_sinha5"
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
        >
          <FaInstagram />
        </a>

        <a
          href="https://wa.me/916299843417"
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
        >
          <FaWhatsapp />
        </a>

        <a
          href="https://github.com/shreya45125"
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
        >
          <FaGithub />
        </a>
      </div>


      <div className="footer-bottom">
        <p className="footer-bottom-left">@ 2024 shreya sinha. All rights reserved.</p>
        <div className='footer-bottom-right'>
             <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
