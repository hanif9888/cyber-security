import React from 'react';
import './Home.css';
import sec from '../../Assets/sec.svg';

const Home = () => {
  return (
    <div>
    <div className='home'>
      <div className="home_container">
        <div className="home_card">
          <h2>STYLOTECH
          </h2>
          <p>HR & RECRUITEMENT, CYBER SECURITY, A DIGITAL FORENSICS COMPANY</p>
          <div className="home_btn">
          <div className='btn_home'>
              Contact Us
          </div>
          <div className='btn_home2'>
              Learn More
          </div>
          </div>
        </div>
        <div className="home_card">
           <img src={sec} alt="" />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Home