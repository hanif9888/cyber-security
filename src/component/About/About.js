import React from 'react'
import './About.css';
import about1 from '../../Assets/about1.svg';
import about2 from '../../Assets/about2.svg';
import about3 from '../../Assets/about3.svg';

const About = () => {
  return (
    <div className='about'>
        <div className="about_container">
           <div className="about_card">
                <img src={about1} alt="" />
            </div>
           <div className="about_card">
                <h3>WEBSITE / SOFTWARE DEVELOPMENT</h3>
                <p>When it comes to Software Development Services, Stylopedia has successfully delivered a variety of customized software products to clients spread across domains. We have expertise for both Web and desktop-based software application solutions. However most enterprises use and opt for web based solution for global access.</p>
            </div>
           <div className="about_card">
                <h3>DIGITAL FORENSIC SERVICES</h3>
                <p>Forensic specialists learn how to identify, preserve, and extract data from electronic devices, such as computers and smart phones. The Bachelor of Science in Information Technology (IT) degree prepares students to install, manage, and maintain the computing infrastructure on which organizational systems run.</p>
            </div>
            <div className="about_card">
                <img src={about3} alt="" />
            </div>
            <div className="about_card">
                <img src={about2} alt="" />
            </div>
           <div className="about_card">
                <h3>PRODUCT SOLUTION</h3>
                <p>Whereas a product has the potential of doing something, a solution is the application of a product to solve a specific industry need or business problem. Note the word specific. The other key concepts here are application and solve, from which the word solution is derived.</p>
            </div>
        </div>
    </div>
  )
}

export default About;