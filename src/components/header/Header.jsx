import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocialsLeft from './HeaderSocialsLeft'
import HeaderSocialsRight from './HeadSocialsRight'
import { motion } from "framer-motion"
import { headerVariants, textVariant } from '../../framer'




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
       variants={textVariant}
       initial = "hidden"
       whileInView="show"
       >Rahul Singh
        </motion.h1>
      <h5 className="text-light">Fullstack Developer</h5>
      <CTA />
      <HeaderSocialsLeft />
      </div>

      <motion.div 
      className="me"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2 ,duration: 1 }}
      >
        <img src={ME} alt="me" />
      </motion.div>
      <HeaderSocialsRight/>
    </motion.div>
 </header>
  )
}

export default Header