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
    <div className="container">
      <div className="div">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['P', 'R', 'O', 'J', 'E', 'C', 'T', 'S']}
            idx={15}
          />
        </h1>
      </div>
      <div className="data">
        {data.map((t) => (
          <div>
            <ProjectItem key={t.id} {...t} />
          </div>
        ))}
      </div>
    </div>
  )
}