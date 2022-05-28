import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

export const ProjectItem = (t) => {
  const { imgUrl, description, title, git, net } = t
  return (
    <div>
      <img src={imgUrl} alt="projectImage" />
      <p>{title}</p>
      <p>{description}</p>
      <a href={git}>
        <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
      </a>
      <a href={net}>
        <FontAwesomeIcon icon={faGlobe} color="#4d4d4e" />
      </a>
    </div>
  )
}