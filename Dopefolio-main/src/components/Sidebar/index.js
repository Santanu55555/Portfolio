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
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img  src={LogoS} alt="Logo" />
        
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink activeclassname="active" className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>

           <NavLink
          activeclassname="active"
          className="skill-link"
          to="/skill"
        >
          
          <FontAwesomeIcon icon={faBtc} color="#4d4d4e" />
        </NavLink>
           <NavLink
          activeclassname="active"
          className="project-link"
          to="/project"
        >
          
          <FontAwesomeIcon icon={faBagShopping} color="#4d4d4e" />
        </NavLink>
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
        <li>
        
        </li>
      </ul>
    </div>
  )
}

export default Sidebar