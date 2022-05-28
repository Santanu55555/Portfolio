import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-s.png'
import Logo from './Logo'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['S', 'a', 'n', 't', 'a','n','u',' ','M','o','h','a','p','a','t','r','a']
  const jobArray = [
    'Full','-','Stack','  ',
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <span> </span>
         
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={18}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={32}
            />
          </h1>
          <h2>Front-End Developer/Back-End Developer</h2>
           <a href="https://docs.google.com/document/d/1f6VoTT8wO0JHcWdO3Z0RDw8ZbyuG0dO-fBK8tzeTcl0/edit#"  className="flat-button">
            RESUME
          </a>
          <Link to="/contact" style={{marginLeft:"20px"}} className="flat-button">
            CONTACT ME
          </Link>
          
        </div>
        <Logo />
      </div>

     
    </>
  )
}

export default Home
