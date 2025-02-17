import React from 'react'
import './Hero.css'
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from 'react-countup'

const Hero = () => {
  return (
    <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container">
            <div className="flexColStart hero-left">
              <div className="hero-title">
                  <h1>
                    URBAN LUXURY MEETS NATURE
                  </h1>
              </div>

              <div className="flexColStart hero-description">
                <span>4BHK + 4T Starting at 2.5CR* | Sector 30, New Gururgram</span>
              </div>

              <div className="flexCenter search-bar">
                  <HiLocationMarker color="var(--blue)" size={20}/>
                  <input type="text" />
                  <button className="button1">Search</button>
              </div>
              <div className=" flexCenter stats">
                <div className="flexColCenter stat">
                  <span>
                    <CountUp start={100} end={900} duration={5}/>
                    <span className='plus'>+</span>
                  </span>
                  <span>
                    Premium Products
                  </span>
                  
                </div>

                <div className="flexColCenter stat">
                <span>
                    <CountUp start={100} end={750} duration={5}/>
                    <span className='plus'>+</span>
                  </span>
                  <span>
                    Happy Customers
                  </span>
                </div>

              </div>

            </div>
            <div className="flexCenter hero-right">
                <div className="image-container">
                    <img src="./heroimg.png" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
