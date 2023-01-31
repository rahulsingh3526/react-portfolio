import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
import {SiHashnode} from 'react-icons/si'


const HeaderSocialsRight = () => {
  return (
    <div className='header__socialss'>
        <a href="https://www.linkedin.com/in/neha-kumari-404b46247/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/neha-kum" target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href="https://twitter.com/nehathecoder" target="_blank" rel="noreferrer"><BsTwitter/></a>
        <a href="https://twitter.com/nehathecoder" target="_blank" rel="noreferrer"><SiHashnode/></a>
    </div>
  )
}

export default HeaderSocialsRight