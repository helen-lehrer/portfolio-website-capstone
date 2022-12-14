import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs';

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div id="app__social-linkedin">
        <BsLinkedin />
      </div>
      <div id="app__social-github">
        <BsGithub />
      </div>
    </div>
  )
}

export default SocialMedia