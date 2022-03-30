import React, { useState } from 'react';
import './Header.css';
import stylopedia from '../../Assets/stylopedia.png'

const Header = () => {
  //Header Logic 
  const [click, setClick] = useState(false);

  const handelClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  //scroll header logic
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 400) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <div className={navbar ? "header scroll" : "header"}>
      <div className='logo'>
        <img src={stylopedia} alt="" />
      </div>
      <div className='web_menu'>
        <ul className={click ? "list active" : "list"}>
          <li className='list_item' onClick={closeMobileMenu}>
            <a href='#Home' className='links'>Home</a>
          </li>
          <li className='list_item' onClick={closeMobileMenu}>
            <a href='#Service' className='links'>Services</a>
          </li>
          <li className='list_item' onClick={closeMobileMenu}>
            <a href='#About' className='links'>About</a>
          </li>
          <li className='list_item' onClick={closeMobileMenu}>
            <a href='#Social' className='links'>Social</a>
          </li>
          <div className='dhoka'>
            <button>Contact Us</button>
          </div>
        </ul>
      </div>
      <div className="menu_icon" onClick={handelClick}>
        <i className={click ? "fas fa-times x-icon" : "fas fa-bars"} />
      </div>
    </div>
  )
}

export default Header;
