import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {HiExternalLink} from 'react-icons/hi'
import {SiHashnode} from 'react-icons/si'




const HeaderSocialsRight = () => {
  return (
    <div className='header__socialsright'>
        <a href="https://twitter.com/nehathecoder" target="_blank" rel="noreferrer"><SiHashnode/></a>
        <a href="https://www.linkedin.com/in/rahul-singh-303071224/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://linktr.ee/rahulsingh3526" target="_blank" rel="noreferrer"><HiExternalLink size ="26px"/></a>
        
    </div>
  )
}



export default HeaderSocialsRight