import React from 'react'
import './experience.css'
import { BsPatchCheckFill} from 'react-icons/bs'
import { motion } from "framer-motion"
import { TypingText } from '../../Text'
import { staggerContainer } from '../../framer'
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'
import {TbBrandJavascript} from 'react-icons/tb'
import {FaReact} from 'react-icons/fa'
import {SiTailwindcss} from 'react-icons/si'
import {SiFramer} from 'react-icons/si'


const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <motion.h2
       variants={staggerContainer}
       initial = "hidden"
       whileInView="show"
       viewport ={{once: false, amount : .5}}
       ><TypingText 
        title ="My Experience"
        textStyles="text-center"/>
        </motion.h2>
      <div className="container experience__container">
        <motion.div 
        className="experience__frontend"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}>
          <h3>Frontend Development</h3>
          <div className="experience__content">

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <div className='text-light'><AiFillHtml5 size="50px"/></div>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
                <div className='text-light'><DiCss3 size="50px"/></div>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>JavaScript</h4>
                <big className='text-light'><TbBrandJavascript size="50px"/></big>
              </div>
            </article>

         

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>React</h4>
                <small className='text-light'><FaReact size="50px"/></small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Tailwind CSS</h4>
                <small className='text-light'><SiTailwindcss size="50px"/></small>
              </div>
            </article>

               <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Framer </h4>
                <small className='text-light'><SiFramer size="50px"/></small>
              </div>
            </article>

            


          </div>

        </motion.div>

        {/* end of frontend */}

        <motion.div 
        className="experience__backend"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        >
          <h3>Integration Speciality</h3>
          <div className="experience__content">

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Nextjs</h4>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Graphql</h4>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Ethersjs</h4>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Valist</h4>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Rainbow kit</h4>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Ipfs</h4>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>nft.storage</h4>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Wagmi</h4>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Push</h4>
               
              </div>
            </article>


            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Livepeer </h4>
           
              </div>
            </article>


          </div>


        </motion.div>

      </div>

    </section>
  )
}

export default Experience