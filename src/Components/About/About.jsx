import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from "../../assets/shreya_image2.jpg"

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt=""/>
      </div>
      <div className="about-section">
        <div className="about-left">
           <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p> "I’m a creative Frontend Developer who blends design and code to craft stunning, responsive, and
 user-friendly web experiences.</p><p> With expertise in React, JavaScript, HTML, and CSS, I turn ideas into
 interactive interfaces that not only look good but also feel amazing to use.</p>
            </div>
            <div className="about-skills" >
                <div className="about-skill">
                    <p>HTML & CSS</p><hr style={{width: "50%"}} />
                </div>
                 <div className="about-skill">
                    <p>JavaScript</p><hr style={{width: "60%"}} />
                </div>
                 <div className="about-skill">
                    <p>React Js</p><hr style={{width: "70%"}} />
                </div>
                 <div className="about-skill">
                    <p>Java(Advance)</p><hr style={{width: "50%"}} />
                </div>
                 <div className="about-skill">
                    <p>Springboot</p><hr style={{width: "50%"}} />
                </div>
                 <div className="about-skill">
                    <p>SQL</p><hr style={{width: "50%"}} />
                </div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>Internship</h1>
          
             <p>
               <a href="/codec_web.pdf" target="_blank" rel="noopener noreferrer">Java Full Stack</a><br />
               <a href="/cyber_security_certificate.pdf" target="_blank" rel="noopener noreferrer">Cyber Security and Ethical Hacking</a>
              
            </p>
        </div>
        <hr/>
         <div className="about-achievement">
            <h1>Certificates</h1>
             <a href="/c_certificate.pdf" target="_blank" rel="noopener noreferrer">C & C++</a>
                 <a href="/libre.pdf" target="_blank" rel="noopener noreferrer">Libre Office</a>
                <a href="/html.pdf" target="_blank" rel="noopener noreferrer">HTML</a> 
                <a href="/cyber_bootcamp.pdf" target="_blank" rel="noopener noreferrer">Cyber security bootcamp</a> 
        </div>
        
      </div>
    </div>
  )
}

export default About
