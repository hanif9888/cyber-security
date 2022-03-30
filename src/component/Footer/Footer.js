import React from 'react';
import './Footer.css';
import stylotech from '../../Assets/stylotech.png';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer_container">
                <div className="footer_card">
                    <div className="footer_card1">
                        <div className='footer_img'>
                            <img src={stylotech} alt=""  />
                        </div>
                        <h3>Stylopedia Technology</h3>
                        <p>info@stylotech.in</p>
                    </div>
                </div>
                <div className="footer_card">
                    <div className="footer_card2">
                        <h3>Get Your Card</h3>
                        <p>Download our digital visiting card.!</p>
                        <div className='btn_center'>
                            <a download href='' className="card2_btn">Download Card!</a>
                        </div>
                    </div>
                </div>
                <div className="footer_card">
                    <div className="footer_card3">
                        <h3>Our Socials</h3>
                        <p>Follow Us on Social Media to get in touch</p>
                        <ul className='footer_list'>
                            <li><i class="fa-brands fa-linkedin-in"></i></li>
                            <li><i class="fa-brands fa-instagram"></i></li>
                            <li><i class="fa-brands fa-whatsapp"></i></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;