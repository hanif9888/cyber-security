import React from 'react'
import Header from '../component/Header/Header';
import Hero from '../component/Hero/Hero';
import Home from '../component/Home/Home';
import Service from '../component/Service/Service';
import Footer from '../component/Footer/Footer';
import Copyright from '../component/Footer/Copyright';
import Social from '../component/Social/Social';
import About from '../component/About/About';

const Main = () => {
    return (
        <div>
            <Header />
            <section id="Home">
                <Home />
            </section>
            <section id="Service">
                <Service />
            </section>
            <section id="About">
                <About />
            </section>
            <section id="Social">
                <Social />
            </section>
            <section id="Contact">
                <Hero />
            </section>
            <Footer />
            <Copyright />
        </div>
    )
}

export default Main