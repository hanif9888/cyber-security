import React, { useEffect } from 'react';
import './Service.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import sec2 from '../../Assets/sec2.png';

const Service = () => {

    useEffect(() => {
        Aos.init({ duration: 1500 })
    }, [])

    return (
        <div>
            <h2 className='center_h2'>Our Mission</h2>
            <p className='center_p'>We keep our cyberspace safe and secure to underpin our National Security, power a Digital Economy, and protect our Digital Way of Life.</p>
            <div className='service'>
                <div className="service_container">
                    <div className="service_card" data-aos="flip-right">
                        <img src="https://lakhankumarenterprises.netlify.app/images/SecurityServiceIcon.svg" alt="" className='img_service' />
                        <h3>
                            HR & RECRUITEMENTS</h3>
                        <p>Hire Professional Security Guards for your societies, commercial sites and much more.</p>
                        <a href="" className='read_more'>Read More</a>
                    </div>
                    <div className="service_card" data-aos="flip-right">
                        <img src={sec2} alt="" className='img_service' />
                        <h3>
                            FORENSIC INVESTIGATION</h3>
                        <p>Hire Professional Security Guards for your societies, commercial sites and much more.</p>
                        <a href="" className='read_more'>Read More</a>
                    </div>
                    <div className="service_card" data-aos="flip-right">
                        <img src="https://lakhankumarenterprises.netlify.app/images/ContractLabourIcon.svg" alt="" className='img_service' />
                        <img src="" />
                        <h3>
                            CYBER SECURITY</h3>
                        <p>Hire Professional Security Guards for your societies, commercial sites and much more.</p>
                        <a href="" className='read_more'>Read More</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service;