import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs';

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a
      href="https://www.linkedin.com/in/helen-lehrer/"
      target="_blank"
      rel="noreferrer"
      >
        <div id="app__social-linkedin">
        <BsLinkedin />
        </div>
      </a>
      <a
      href="https://github.com/helen-lehrer"
      target="_blank"
      rel="noreferrer"
      >
        <div id="app__social-github">
          <BsGithub />
        </div>
      </a>
    </div>
  )
}

export default SocialMedia