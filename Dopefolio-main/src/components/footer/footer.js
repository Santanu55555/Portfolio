import {
  faGithub,
  faLinkedin,
  faMail,
} from '@fortawesome/free-brands-svg-icons'
import './footer.scss'
import { faEnvelopeCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component } from 'react'
export const Footer = () => {
  return (
    <footer
      className="footer"
      style={{
        paddingLeft: '45%',
        height: '100px',
        paddingTop: '20px',
        marginBottom: '30px',
      }}
    >
      <div
        className="row"
        style={{
          color: 'white',
          display: 'flex',
          gap: '20px',
          marginLeft: '14px',
        }}
      >
        <div>
          <a
            href="https://www.linkedin.com/in/santanu-mohapatra-880204200/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#4d4d4e"
              className="iconFooter"
              style={{ fontSize: '30px' }}
            />
          </a>
        </div>
        <div>
          <a
            href="https://github.com/Santanu55555"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#4d4d4e"
              className="iconFooter"
              style={{ fontSize: '30px' }}
            />
          </a>
        </div>
        <div>
          <a href="mailto:shaantanu1234@gmail.com?">
            <FontAwesomeIcon
              icon={faEnvelopeCircleCheck}
              color="#4d4d4e"
              className="iconFooter"
              style={{ fontSize: '30px' }}
            />
          </a>
        </div>

        <div />
      </div>
      <div
        style={{
          color: 'grey',
          fontSize: '10px',
          fontFamily: 'verdana',
          marginTop: '30px',
        }}
      >
        Designed by <a title="Styleshout">Santanu Mohapatra</a>
      </div>
    </footer>
  )
}
