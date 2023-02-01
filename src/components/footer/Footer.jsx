import React from 'react'
import './footer.css'
import {BsTwitter} from 'react-icons/bs'
import { motion } from 'framer-motion'
import { footerVariants } from '../../framer'
import {FaGithub} from 'react-icons/fa'
import {BsYoutube} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {HiExternalLink} from 'react-icons/hi'
import {SiHashnode} from 'react-icons/si'


const Footer = () => {
  return (
    <motion.footer
        variants = {footerVariants}
        initial = "hidden"
        whileInView= "show">
      <a href="#" className='footer__logo'>Rahul</a> 
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
      <a href="https://www.youtube.com/channel/UC9lsl35cIXRo824gj5wOP3g" target="_blank" rel="noreferrer"><BsYoutube/></a>
        <a href="https://twitter.com/rahul3526" target="_blank" rel="noreferrer"><BsTwitter/></a>
        <a href="https://github.com/rahulsingh3526" target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href="https://twitter.com/nehathecoder" target="_blank" rel="noreferrer"><SiHashnode/></a>
        <a href="https://www.linkedin.com/in/rahul-singh-303071224/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://linktr.ee/rahulsingh3526" target="_blank" rel="noreferrer"><HiExternalLink /></a>
      </div>

     <div className="footer__copyright">
      <small>@Rahul Singh; Portfolio Website. All rights reserved.</small>
     </div>


    </motion.footer>
  )
}

export default Footer