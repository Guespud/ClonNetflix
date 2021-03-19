import React from 'react'
import Header from '../headers'
import './hero.scss'

const Hero = () => {
    return (
        <div className="LandingHero">
            <img className="LandingHero_bg" src="/images/homenetflix.jpg"/>
            <Header/>
        </div>
    )
}

export default Hero;
