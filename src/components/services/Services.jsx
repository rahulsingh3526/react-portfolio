import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
import { motion } from 'framer-motion'
import { staggerContainer } from '../../framer'
import { TypingText } from '../../Text'

const Services = () => {
  return (
<section id='services'>
 <h5>What I Offer</h5>
      <motion.h2
       variants={staggerContainer}
       initial = "hidden"
       whileInView="show"
       viewport ={{once: false, amount : .5}}
       ><TypingText 
        title ="Services"
        textStyles="text-center"/>
        </motion.h2>

<div className="container services__container">
  <article className="service">
    <div className="service__head">
      <h3>UI/UX Design</h3>
      </div>

        <ul className="service__list">
          <li><BiCheck className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>

          <li><BiCheck className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>

          <li><BiCheck className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>

          <li><BiCheck className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>

          <li><BiCheck className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>

          <li><BiCheck className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          </ul>
          </article>

          {/* end of ui/ux */}

          <article className="service">
    <div className="service__head">
      <h3>Web Development</h3>
      </div>

        <ul className="service__list">
          <li><BiCheck className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>

          <li><BiCheck className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>

          <li><BiCheck className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>

          <li><BiCheck className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>

          <li><BiCheck className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>

          <li><BiCheck className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>

          <li><BiCheck className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>

          <li><BiCheck className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          </ul>
          </article>

          {/* end of web development */}

          <article className="service">
    <div className="service__head">
      <h3>Content Creation</h3>
      </div>

        <ul className="service__list">
          <li><BiCheck className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>

          <li><BiCheck className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>

          <li><BiCheck className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>

          <li><BiCheck className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>

          <li><BiCheck className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>

          <li><BiCheck className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          </ul>
          </article>

          {/* end of 3rd */}
  
    

</div>

  </section>  )
}

export default Services