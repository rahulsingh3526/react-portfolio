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
  {/* <article className="service">
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
          </article> */}

          {/* end of ui/ux */}

          <article className="service">
    <div className="service__head">
      <h3>Web Development</h3>
      </div>

        <ul className="service__list">
       

          <li><BiCheck className='service__list-icon'/>
          <p>Working with advanced frameworks for frontend development with Nextjs and reactjs which makes it easy to understand by other developers</p>
          </li>

          <li><BiCheck className='service__list-icon'/>
          <p>Use of frontend css libraries like tailwind and framer motion used for instant enhancement of a project looks for smooth transition </p>
          </li>

          <li><BiCheck className='service__list-icon'/>
          <p>Currently learning graphql for easy tracking of the events emitted during the solidity codes</p>
          </li>

          <li><BiCheck className='service__list-icon'/>
          <p>Bringing the best Web3 impletation and easy to use websites with good UI/UX and important implemention like nft marketplace, etc </p>
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
          <p>Made a blog and youtube video on how to install metamask and other wallet with Rainbow kit </p>
          </li>

          <li><BiCheck className='service__list-icon'/>
          <p>Made a blog on how to solve hydration error which has over 1000 + views on youtube which is a major issue with rainbow kit</p>
          </li>

          <li><BiCheck className='service__list-icon'/>
          <p>Made a very detailed guide to wagmi which is used to connect the frontend to the solidity contract and is part of the integrations.</p>
          </li>

          <li><BiCheck className='service__list-icon'/>
          <p>Upcoming a whole playlist of framer motion videos for quick and easy integration.</p>
          </li>

       
          </ul>
          </article>

          {/* end of 3rd */}
  
    

</div>

  </section>  )
}

export default Services