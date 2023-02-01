import React from 'react'
import './contact.css'
import {MdOutlineEmail} from'react-icons/md'
import {BsWhatsapp} from'react-icons/bs'
import emailjs from '@emailjs/browser'
import { motion, useInView } from 'framer-motion'
import { TypingText } from '../../Text'
import { staggerContainer } from '../../framer'
import { useRef } from "react";



const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_u6ytoi2', 'template_epg0lne', form.current, '81Y9OlY9r_TKWeoJw')
      
    e.target.reset()
  };

  return (
<section id='contact'>
  <h5>Get In Touch</h5>
  <motion.h2
       variants={staggerContainer}
       initial = "hidden"
       whileInView="show"
       viewport ={{once: false, amount : .5}}
       ><TypingText 
        title ="Contact Me"
        textStyles="text-center"/>
  </motion.h2>

  <div className="container contact__container" ref={ref} >
    <div style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }} 
        className="contact__options">
      <article className="contact__option">
        <MdOutlineEmail className='contact__option-icon'/>
        <h4>Email</h4>
        <h5>koderrahul@gmail.com</h5>
        <a href="mailto:koderrahul@gmail.com" target='_blank' rel="noreferrer">Send a message</a>
      </article>

      <article className="contact__option">
        <BsWhatsapp className='contact__option-icon'/>
        <h4>Whatsapp</h4>
        <h5>+91 7880049324</h5>
        <a href="https://wa.me/917880049324?text=Hello" target='_blank' rel="noreferrer">Send a message</a>
      </article>

    </div>

    {/* end of contact options */}

    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name='name' placeholder='Your Full Name' required />
      <input type="email" name='email' placeholder='Your Email' required/>
      <textarea name="message" id="" rows="7" placeholder='Your Message' required></textarea>
      <motion.button 
      type='submit' 
      className='btn btn-primary'
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 250, damping: 10 }}
      >Send Message</motion.button>
    </form>
  </div>
</section>  )
}

export default Contact