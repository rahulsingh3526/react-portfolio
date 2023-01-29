import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import { motion } from "framer-motion"



const Header = () => {
  return (
 <header>
    <div className="container header__container">
      <h5>Hello I'm</h5>
      <h1>Neha Kumari</h1>
      <h5 className="text-light">Fullstack Developer</h5>
      <CTA />
      <HeaderSocials />

      <motion.div 
      className="me"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      >
        <img src={ME} alt="me" />
      </motion.div>

      <a href="#contact" className='scroll__down'>Scroll Down</a>

    </div>
 </header>
  )
}

export default Header