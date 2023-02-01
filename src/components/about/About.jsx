import React from 'react'
import './about.css'
import rahul from '../../assets/rahul.jpg'
import {FaAward} from 'react-icons/fa'
import {BiGitMerge} from 'react-icons/bi'
import {VscFolderLibrary} from 'react-icons/vsc'
import { motion } from 'framer-motion'
import { staggerContainer } from '../../framer'
import { TypingText } from '../../Text'



const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <motion.h2
      variants={staggerContainer}
      initial = "hidden"
      whileInView="show"
      viewport ={{once: false, amount : 0.25}}
      ><TypingText 
       title ="About"
       textStyles="text-center"/></motion.h2>
      

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={rahul} alt="a picture of me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
              </article>

              <article className='about__card'>
              <BiGitMerge className='about__icon' />
              <h5>Opensource</h5>
              <small>200+ Commits</small>
              </article>

              <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>15+ Completed</small>
            </article>

          </div>

          <p>
           Initially a solidity fan but later realised that solidity is just 10 % of the whole code of a website. Learned that web3 was overwhelmed since we had to use other web3 infrastructure to support our projects we working on thus decided to give web3 integration of different protocols a priority while learning about web3 products.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>

      </div>
    </section>
  )
}

export default About