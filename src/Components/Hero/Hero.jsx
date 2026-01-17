import React from 'react'
import './Hero.css'
import profile_img from  '../../assets/shreya_image2.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import resume from'../../assets/Shreya_Resume1update.pdf'
const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>I'm Shreya Sinha,</span> Fullstack developer</h1>
      <p>I build scalable, end-to-end web applications using React, Node.js, Java, Spring Boot, and modern databases.</p>
        <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link'  offset={50} href='#work'>View my project</AnchorLink></div>
       
        <a href={resume}target="_blank" rel="noopener noreferrer" className="hero-resume">My resume</a>
      </div>
    </div>
  )
}

export default Hero
