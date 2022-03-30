import React, {useEffect} from 'react';
import './Hero.css';
import Aos from "aos";
import "aos/dist/aos.css";


const Hero = () => {
    
  useEffect(() => {
    Aos.init({duration: 1500})
  }, [])
  
    return (
        <div className='hero' data-aos="flip-down">
            <div className="content_hero">
                <h3>Do you have any projects?
                    Contact us</h3>
                <a href='https://wa.me/9359087965' className="hero_btn" target="_blank" rel='norefrer'>Contact Us</a>
            </div>
        </div>
    )
}

export default Hero;