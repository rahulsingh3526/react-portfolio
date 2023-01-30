import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import { motion } from "framer-motion"
import { headerVariants, staggerContainer } from '../../framer'
import { TypingText } from '../../Text'



const Header = () => {
  return (
 <header>
    <motion.div 
    className="container header__container"
    variants = {headerVariants}
    initial = "hidden"
    whileInView= "show"
    // initial ={{y: -250, opacity: 0}}
    // animate ={{y: 50, opacity: 1}}
    // transition={{ duration: 0.8 }}
    >
      <div>
      
      <h5>Hello I'm</h5>
      <motion.h1
       variants={staggerContainer}
       initial = "hidden"
       whileInView="show"
       viewport ={{once: false, amount : 1}}
       ><TypingText 
        title ="Rahul Singh"
        textStyles="text-center"/>
        </motion.h1>
      <h5 className="text-light">Fullstack Developer</h5>
      <CTA />
      <HeaderSocials />
      </div>

      <motion.div 
      className="me"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      >
        <img src={ME} alt="me" />
      </motion.div>

      <a href="#contact" className='scroll__down'>Scroll Down</a>

    </motion.div>
 </header>
  )
}

export default Header