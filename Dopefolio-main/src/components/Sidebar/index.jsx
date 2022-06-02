import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
// import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faYoutube,
  faSkype,
  faBtc,
} from '@fortawesome/free-brands-svg-icons'
import { faHome, faUser, faEnvelope, faBagShopping } from '@fortawesome/free-solid-svg-icons'
// import { Link, NavLink } from 'react-router-dom'
import Home from '../Home'
import About from '../About'
import Skills from '../skills'
import { Projects } from '../projects'
import Contact from '../Contact'

const Sidebar = () => {
  return (
    <div>
      <div className="nav-bar">
        <a className="logo" href="#home">
          <img src={LogoS} alt="Logo" />
        </a>
        <nav>
          <a exact="true" activeclassname="active" href="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          </a>
          <a
            activeclassname="active"
            className="about-link"
            href="#about"
          >
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
          </a>
          <a
            activeclassname="active"
            className="contact-link"
            href="#contact"
          >
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
          </a>

          <a activeclassname="active" className="skill-link" href="#skills">
            <FontAwesomeIcon icon={faBtc} color="#4d4d4e" />
          </a>
          <a
            activeclassname="active"
            className="project-link"
            href="#projects"
          >
            <FontAwesomeIcon icon={faBagShopping} color="#4d4d4e" />
          </a>
        </nav>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/santanu-mohapatra-880204200/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Santanu55555"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UCUTlhySghBXRyS6y2rYywMA"
              rel="noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
            </a>
          </li>
          <li></li>
        </ul>
      </div>
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id='projects'>
        <Projects />
      </div>
      <div id='contact'>
        <Contact />
      </div>
    </div>
  )
}

export default Sidebar
