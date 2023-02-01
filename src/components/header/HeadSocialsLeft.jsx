import React from 'react'
import {FaGithub} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'


const HeaderSocialsLeft = () => {
  return (
    <div className='header__socialsleft'>
        <a href="https://www.youtube.com/channel/UC9lsl35cIXRo824gj5wOP3g" target="_blank" rel="noreferrer"><BsYoutube/></a>
        <a href="https://twitter.com/rahul3526" target="_blank" rel="noreferrer"><BsTwitter/></a>
        <a href="https://github.com/rahulsingh3526" target="_blank" rel="noreferrer"><FaGithub/></a>
       
       
    </div>
  )
}





export default HeaderSocialsLeft