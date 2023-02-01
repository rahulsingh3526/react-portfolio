import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaFacebook} from 'react-icons/fa'
import {SiHashnode} from 'react-icons/si'




const HeaderSocialsRight = () => {
  return (
    <div className='header__socialsright'>
        <a href="https://twitter.com/nehathecoder" target="_blank" rel="noreferrer"><SiHashnode/></a>
        <a href="https://www.linkedin.com/in/rahul-singh-303071224/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://www.facebook.com/groups/282620996193125/" target="_blank" rel="noreferrer"><FaFacebook/></a>
        
    </div>
  )
}



export default HeaderSocialsRight