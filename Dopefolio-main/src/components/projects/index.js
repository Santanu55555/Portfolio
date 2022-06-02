import React, { useEffect, useState } from 'react'
// import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import data from './data.json'
import { ProjectItem } from './indexitem'
import AnimatedLetters from '../AnimatedLetters'

export const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])
  return (
    <div className="data-container" style={{ marginTop: '200px' }}>
      <div className="project-div">
        <section>
          <div class="content" style={{ marginLeft: '30px' }}>
            <h2>Projects</h2>
            <h2>Projects</h2>
          </div>
        </section>
      </div>
      <div className="project-data">
        {data.map((t) => (
          <div>
            <ProjectItem key={t.id} {...t} />
          </div>
        ))}
      </div>
    </div>
  )
}
