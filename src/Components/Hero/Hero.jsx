import React from 'react'
import './Hero.css'
import profile_img from  '../../assets/shreya_image2.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import resume from'../../assets/Shreya_Resume1update.pdf'
const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>I'm Shreya Sinha,</span> frontend developer</h1>
      <p>
I am a passionate and detail-oriented Front-End Developer with a strong foundation in creating responsive, user-friendly web interfaces. Proficient in HTML, CSS, JavaScript, and modern frameworks like React and Vue.js, I thrive on transforming complex ideas into seamless digital experiences. With a keen eye for design and performance optimization, I aim to bridge the gap between aesthetics and functionality. I am committed to continuous learning and leveraging innovative technologies to deliver impactful solutions that enhance user engagement.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link'  offset={50} href='#contact'>Connect With Me</AnchorLink></div>
       
        <a href={resume}target="_blank" rel="noopener noreferrer" className="hero-resume">My resume</a>
      </div>
    </div>
  )
}

export default Hero
