import React, {useEffect} from 'react';
import './Social.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import instagram1 from '../../Assets/instagram1.gif';
import linkedin1 from '../../Assets/linkedin1.gif';
import whatsapp from '../../Assets/whatsapp.gif';

const Social = () => {

    useEffect(() => {
        Aos.init({duration: 1500})
    }, [])

  return (
    <div className='social'>
        <div className="social_container">
            <div className="social_card" data-aos="flip-up">
                <div className="content_social">
                    <img src={instagram1} alt="" className='img_content'/>
                    <p>Contact Us on Instagram to Enquire about our services</p>
                    <div className="border_social"></div>
                    <h3 className='username'>Stylopedia Technology</h3>
                    <a href="">DM Us on instagram</a>
                </div>
            </div>
            <div className="social_card" data-aos="flip-up">
                <div className="content_social">
                    <img src={linkedin1} alt="" className='img_content'/>
                    <p>Contact Us on linkedin to Enquire about our services</p>
                    <div className="border_social"></div>
                    <h3 className='username'>Stylopedia Technology</h3>
                    <a href="https://www.linkedin.com/in/stylopedia-technology-aa3700230" target="_blank" rel="noreffrer">Connect With us on linkdin</a>
                </div>
            </div>
            <div className="social_card" data-aos="flip-up">
                <div className="content_social">
                    <img src={whatsapp} alt="" className='img_content'/>
                    <p>Contact Us on Whatsapp to Enquire about our services</p>
                    <div className="border_social"></div>
                    <h3 className='username'>Stylopedia Technology</h3>
                    <a href="https://wa.me/8668431882" target="_blank" rel='norefrer'>Chat with us now</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Social;