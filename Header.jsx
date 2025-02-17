import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <section className="header-wrapper">
        <div className="flexCenter paddings innerWidth header-container">

        <img src="./estatelogo.png" alt="logo" width={90}/>

        <div className="flexCenter header-menu">
            <a href="">Residencies</a>
            <a href="">Our Values</a>
            <a href="">Contact Us</a>
            <a href="">Get Started</a>
            <button className="button-header">
                <a href="">Contact</a>
            </button>
        </div>
        </div>
    </section>
  )
}

export default Header
